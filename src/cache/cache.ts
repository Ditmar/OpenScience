import NodeCache from 'node-cache';

const cacheTTL = Number(process.env.CACHE_TTL) || 600;
const cache = new NodeCache({ stdTTL: cacheTTL });

export const getCache = (key: string) => cache.get(key);
export const setCache = (key: string, value: unknown) => cache.set(key, value);
export const delCache = (key: string) => cache.del(key);
