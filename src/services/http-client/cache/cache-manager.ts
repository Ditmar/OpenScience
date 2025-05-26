import type { CacheActions } from './strategies/base-cache-actions';
import { CacheType } from '../types/cache-types';
import { cacheFactory } from './cache-factory';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class SingletonCache {
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  public static instance: unknown | null = null;

  static getInstance<T>(type: CacheType): CacheActions<T> {
    if (!SingletonCache.instance) {
      SingletonCache.instance = cacheFactory<T>(type);
    }
    return SingletonCache.instance as CacheActions<T>;
  }
}
