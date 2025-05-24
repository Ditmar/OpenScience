# 📦 `fetchWrapper` Utility & Advanced Caching System

## 🧩 Descripción General

Para optimizar el rendimiento de la aplicación y evitar solicitudes HTTP innecesarias, se desarrolló `fetchWrapper`: un **utilitario centralizado para realizar peticiones HTTP** con soporte de **caché inteligente** y TTL (Time-To-Live) configurable.

Este sistema permite reutilizar respuestas válidas en caché, reduce la latencia percibida por el usuario y desacopla la lógica de almacenamiento de caché para facilitar futuras integraciones con otros proveedores (como Redis o `localStorage`).

---

## ⚙️ Funcionamiento del `fetchWrapper`

### Flujo de ejecución:

1. **Generación de clave de caché** basada en la URL y método HTTP.
2. **Consulta de caché**:

   * Si existe una entrada y su TTL no ha expirado, retorna la respuesta almacenada.
   * Si no existe o ha expirado, realiza la petición `fetch`.
3. **Almacenamiento**: guarda la respuesta en caché con un TTL específico.
4. **Devolución** del resultado (desde caché o red).

---

## 📁 Estructura de Archivos Relacionados

* `fetch-wrapper.ts`: lógica principal del wrapper.
* `cache/strategies/memory-cache.ts`: implementación del caché en memoria.
* `cache/strategies/redis-cache.ts`: soporte para Redis como backend de caché.
* `cache/strategies/base-cache-actions.ts`: interfaz base `CacheActions` para extensibilidad.
* `cache/cache-manager.ts`: singleton para elegir el tipo de caché dinámicamente.
* `utils/request-utils.ts`: generación de claves de caché.
* `utils/environments.ts`: carga de variables de entorno.

---

## 🔁 Comportamiento del Caché

* **TTL configurable** a través de `FETCH_CACHE_TTL_MS`.
* **Default TTL**: 300,000 ms (5 minutos) si no se define otro valor.
* **Namespace de caché**: combinando método HTTP y URL (`${url}-${method}`) para evitar colisiones.

---

## 🧠 Diseño Extensible del Caché

`fetchWrapper` utiliza una interfaz genérica `CacheActions<T>` que define:

```ts
interface CacheActions<T> {
  get(key: string): Promise<T | null>;
  set(key: string, data: T, ttl: number): Promise<void>;
  clear(): Promise<void>;
  has(key: string): Promise<boolean>;
}
```

Esto permite implementar múltiples estrategias de almacenamiento (in-memory, Redis, etc.).

---

## 🧪 Casos Cubiertos en Tests

* ✔️ Retorno desde caché cuando es válido.
* ✔️ Fallback a red si la entrada expiró o no existe.
* ✔️ Configuración del TTL desde variable de entorno.
* ✔️ Limpieza manual del caché (`clear()`).
* ✔️ Compatibilidad con múltiples estrategias (memoria, Redis).

---

## 🧹 Limpieza Manual del Caché

Desde cada estrategia puedes usar:

```ts
await cache.clear(); // Limpia todo
```

En el futuro, se puede extender para `clear(key)` y `clearAll()` según necesidades.

---

## 📝 Ejemplo de Uso (Astro + React)

### En Astro:

```tsx
---
import { FetchWrapper } from '@services/http-client/network/fetch-wrapper';

interface MockData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchWrapper = new FetchWrapper<MockData[]>();

const response = await fetchWrapper.fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
});

const posts = response;
---
<Layout title="Sample Home">
  <Demo posts={posts} />
</Layout>
```

### En React:

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

## 📡 Agregar Nuevos Proveedores de Caché

1. Crea un archivo en `src/services/http-client/network/cache/strategies/` que implemente `CacheActions<T>`.
2. Implementa los métodos `get`, `set`, `clear`, `has`.
3. Registra el provider en `cache-manager.ts`:

   ```ts
   case CacheType.<TU_PROVIDER>:
     this.cache = new <TuClaseDeCache>();
     break;
   ```
4. Usa `SingletonCache.getInstance<T>(CacheType.<TU_PROVIDER>)` para usarlo.

---
