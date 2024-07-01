import NodeCache from 'node-cache';

// eslint-disable-next-line turbo/no-undeclared-env-vars
const cacheTTL = Number(process.env.CACHE_TTL) || 600;
const cache = new NodeCache({ stdTTL: cacheTTL });

export const getCache = <T>(key: string) => cache.get(key) as T;
export const setCache = <T>(key: string, value: T) => cache.set(key, value);
export const delCache = (key: string) => cache.del(key);
