import { MemoryCache } from './strategies/memory-cache';
import { RedisCache } from './strategies/redis-cache';
import type { CacheActions } from './strategies/base-cache-actions';
import { CacheType } from '../types/cache-types';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class SingletonCache {
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  public static instance: unknown | null = null;

  static getInstance<T>(type: CacheType): CacheActions<T> {
    if (!SingletonCache.instance) {
      switch (type) {
        case CacheType.MEMORY:
          SingletonCache.instance = new MemoryCache<T>();
          break;
        case CacheType.REDIS:
          SingletonCache.instance = new RedisCache<T>();
          break;
        default:
          throw new Error('Invalid cache type');
      }
    }
    return SingletonCache.instance as CacheActions<T>;
  }
}
/*
import { createClient } from 'redis';

const client = createClient({
    username: 'default',
    password: 'null',
    socket: {
        host: 'memcached-13975.c91.us-east-1-3.ec2.redns.redis-cloud.com',
        port: 13975
    }
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

await client.set('foo', 'bar');
const result = await client.get('foo');
console.log(result)  // >>> bar

*/
