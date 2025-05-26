import { MemoryCache } from './strategies/memory-cache';
import { RedisCache } from './strategies/redis-cache';
import { CacheType } from '../types/cache-types';
import type { CacheActions } from './strategies/base-cache-actions';

export function cacheFactory<T>(type: CacheType): CacheActions<T> {
  switch (type) {
    case CacheType.MEMORY:
      return new MemoryCache<T>();
    case CacheType.REDIS:
      return new RedisCache<T>();
    default:
      throw new Error('Invalid cache type');
  }
}
