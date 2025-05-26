import { createClient } from 'redis';
import type { CacheActions } from './base-cache-actions';
import { getEnvironment } from '../../../utils/environments';
import type { RedisConnectionOptions } from '../../types';

export class RedisCache<T> implements CacheActions<T> {
  private options: RedisConnectionOptions;

  private redisClient: ReturnType<typeof createClient>;

  constructor() {
    this.options = {
      username: getEnvironment('REDIS_USERNAME'),
      password: getEnvironment('REDIS_PASSWORD'),
      socket: {
        host: getEnvironment('REDIS_HOST'),
        port: Number(getEnvironment('REDIS_PORT')),
      },
    };
    this.redisClient = createClient(this.options);
    this.redisClient.on('error', (err) => {
      throw new Error(`Redis Client Error: ${String(err)}`);
    });
    this.redisClient.on('ready', () => {});
    this.connect()
      .then(() => {})
      .catch((err: unknown) => {
        throw new Error(`Redis Client connection error: ${String(err)}`);
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
