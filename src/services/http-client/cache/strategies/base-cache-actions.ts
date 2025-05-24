export interface CacheActions<T> {
  get(key: string): Promise<T | null>;
  set(key: string, data: T, ttl: number): Promise<void>;
  clear(): Promise<void>;
  has(key: string): Promise<boolean>;
}
