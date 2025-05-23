import { createClient } from 'redis';
import type { CacheActions } from './base-cache-actions';

export interface RedisCacheOptions {
  username: string;
  password: string;
  socket: {
    host: string;
    port: number;
  };
}

export class RedisCache<T> implements CacheActions<T> {
  private redisClient: ReturnType<typeof createClient>;

  constructor(options: RedisCacheOptions) {
    this.redisClient = createClient(options);
    this.redisClient.on('error', (err) => {
      console.error('Redis Client Error', err);
    });
    this.redisClient.on('ready', () => {
      console.log('Redis Client is ready');
    });
    this.connect()
      .then(() => {
        console.log('Redis Client connected');
      })
      .catch((err: unknown) => {
        console.error('Redis Client connection error', err);
      });
  }

  async connect(): Promise<void> {
    if (!this.redisClient.isOpen) {
      await this.redisClient.connect();
    }
  }

  async get(key: string): Promise<T | null> {
    const data = await this.redisClient.get(key);
    if (!data) {
      return null;
    }
    return JSON.parse(data) as T;
  }

  async set(key: string, data: T, ttl: number): Promise<void> {
    const jsonData = JSON.stringify(data);
    await this.redisClient.set(key, jsonData);
    await this.redisClient.expire(key, ttl);
  }

  async clear(): Promise<void> {
    await this.redisClient.flushdb();
  }

  async has(key: string): Promise<boolean> {
    const exists = await this.redisClient.exists(key);
    return exists === 1;
  }
}
