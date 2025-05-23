import { defaultConfig } from '../../config/defaultConfig';
import { generateKey } from '../../utils/request-utils';
import { SingletonCache } from '../cache/cache-manager';
import type { CacheActions } from '../cache/strategies/base-cache-actions';

interface Options<T> {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: T;
}

export class FetchWrapper<T> {
  private cache: CacheActions<T>;

  constructor() {
    this.cache = SingletonCache.getInstance<T>('memory');
  }

  async fetch(url: string, options: Options<T> = {}): Promise<T> {
    const { method = 'GET' } = options;

    const cacheKey = generateKey({ url, method });
    console.log('Cache key:', cacheKey);
    const isCacheEnabled = await this.cache.has(cacheKey);
    console.log('Cache enabled:', isCacheEnabled);
    if (isCacheEnabled) {
      const cachedData = await this.cache.get(cacheKey);
      if (cachedData) {
        return cachedData as T;
      }
    }

    const response = await fetch(url, {
      method: options.method ?? 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${String(response.status)}`);
    }

    const data = (await response.json()) as T;

    await this.cache.set(cacheKey, data, Date.now() + defaultConfig.DEFAULT_CACHE_TTL_MS);

    return data;
  }
}
