# 📦 `fetchWrapper` Utility & Advanced Caching System

## 🧩 Overview

To optimize application performance and avoid unnecessary HTTP requests, `fetchWrapper` was developed: a **centralized utility for performing HTTP requests** with support for **smart caching** and configurable TTL (Time-To-Live).

This system allows the reuse of valid cached responses, reduces perceived latency for the user, and decouples caching logic to facilitate future integrations with other providers (such as Redis or `localStorage`).

---

## ⚙️ How `fetchWrapper` Works

### Execution Flow:

1. **Cache key generation** based on the URL and HTTP method.
2. **Cache lookup**:

   * If an entry exists and its TTL has not expired, the stored response is returned.
   * If it doesn't exist or has expired, a `fetch` request is made.
3. **Storage**: saves the response in the cache with a specific TTL.
4. **Return** the result (from cache or network).

---

## 📁 Related File Structure

* `fetch-wrapper.ts`: main wrapper logic.
* `cache/strategies/memory-cache.ts`: in-memory cache implementation.
* `cache/strategies/redis-cache.ts`: Redis support as a cache backend.
* `cache/strategies/base-cache-actions.ts`: base `CacheActions` interface for extensibility.
* `cache/cache-manager.ts`: singleton for dynamically selecting cache type.
* `utils/request-utils.ts`: cache key generation.
* `utils/environments.ts`: environment variable loading.

---

## 🔁 Cache Behavior

* **Configurable TTL** via `FETCH_CACHE_TTL_MS`.
* **Default TTL**: 300,000 ms (5 minutes) if no other value is defined.
* **Cache namespace**: combines HTTP method and URL (`${url}-${method}`) to avoid collisions.

---

## 🧠 Extensible Cache Design

`fetchWrapper` uses a generic interface `CacheActions<T>` that defines:

```ts
interface CacheActions<T> {
  get(key: string): Promise<T | null>;
  set(key: string, data: T, ttl: number): Promise<void>;
  clear(): Promise<void>;
  has(key: string): Promise<boolean>;
}
```

This allows implementation of multiple storage strategies (in-memory, Redis, etc.).

---

## 🧪 Covered Test Cases

* ✔️ Returns from cache when valid.
* ✔️ Falls back to network if entry is expired or doesn't exist.
* ✔️ TTL configuration via environment variable.
* ✔️ Manual cache clearing (`clear()`).
* ✔️ Compatibility with multiple strategies (memory, Redis).

---

## 🧹 Manual Cache Clearing

From each strategy, you can use:

```ts
await cache.clear(); // Clears everything
```

In the future, it can be extended to `clear(key)` and `clearAll()` as needed.

---

## 📝 Usage Example (Astro + React)

### Define a `Demo` fetch helper function

```ts
// getPosts.ts
import { FetchWrapper } from '../http-client/network/fetch-wrapper';

export interface MockData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchWrapper = new FetchWrapper<MockData[]>();
export async function getPosts() {
  const response = await fetchWrapper.fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const posts = response;
  return posts;
}
```

### In Astro:

```tsx
---
import { getPosts } from './getPosts';

const posts = await getPosts();
---
<Layout title="Sample Home">
  <Demo posts={posts} />
</Layout>
```

### In React:

```tsx
interface MockData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export function Demo({ posts }: { posts: MockData[] }) {
  return (
    <div>
      <h1>Demo</h1>
      <h2>Fetched Data:</h2>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong> (User ID: {item.userId}, Completed: {item.completed.toString()})
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

## 📡 Adding New Cache Providers

1. Create a file in `src/services/http-client/network/cache/strategies/` that implements `CacheActions<T>`.

2. Implement the `get`, `set`, `clear`, `has` methods.

3. Register the provider in `cache-manager.ts`:

   ```ts
   case CacheType.<YOUR_PROVIDER>:
     this.cache = new <YourCacheClass>();
     break;
   ```

4. Use `SingletonCache.getInstance<T>(CacheType.<YOUR_PROVIDER>)` to use it.

---
