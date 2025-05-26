import { generateKey } from '../../utils/request-utils';
import { SingletonCache } from '../cache/cache-manager';
import type { CacheActions } from '../cache/strategies/base-cache-actions';
import { CacheType } from '../types/cache-types';
import { getEnvironment } from '../../utils/environments';

interface Options<T> {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: T;
}

export class FetchWrapper<T> {
  private cache: CacheActions<T>;

  constructor() {
    this.cache = SingletonCache.getInstance<T>(CacheType.REDIS);
  }

  async fetch(url: string, options: Options<T> = {}): Promise<T> {
    const { method = 'GET' } = options;

    const cacheKey = generateKey({ url, method });
    const isOnCache = await this.cache.has(cacheKey);
    if (isOnCache) {
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

    await this.cache.set(cacheKey, data, Date.now() + Number(getEnvironment('FETCH_CACHE_TTL_MS')));

    return data;
  }
}
