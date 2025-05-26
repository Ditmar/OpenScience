import type { CacheActions } from './base-cache-actions';

export class MemoryCache<T> implements CacheActions<T> {
  private cache: Map<string, { data: T; expiry: number }> | null = null;

  constructor() {
    this.cache = new Map<string, { data: T; expiry: number }>();
  }

  get(key: string): Promise<T | null> {
    if (!this.cache) {
      return Promise.resolve(null);
    }

    const isOnCache = this.cache.has(key);
    if (!isOnCache) {
      return Promise.resolve(null);
    }
    const { data, expiry } = this.cache.get(key) as { data: T; expiry: number };
    const isExpired = Date.now() > expiry;
    if (isExpired) {
      this.cache.delete(key);
      return Promise.resolve(null);
    }
    return Promise.resolve(data);
  }

  set(key: string, data: T, ttl: number): Promise<void> {
    if (!this.cache) {
      this.cache = new Map<string, { data: T; expiry: number }>();
    }
    const expiry = Date.now() + ttl;
    this.cache.set(key, { data, expiry });
    return Promise.resolve();
  }

  clear(): Promise<void> {
    if (!this.cache) {
      return Promise.resolve();
    }
    this.cache.clear();
    return Promise.resolve();
  }

  has(key: string): Promise<boolean> {
    if (!this.cache) {
      return Promise.resolve(false);
    }
    return Promise.resolve(this.cache.has(key));
  }
}
