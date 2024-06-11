import fetch from 'node-fetch';
import NodeCache from 'node-cache';

const cacheTTL = Number(process.env.CACHE_TTL) || 600;
const cache = new NodeCache({ stdTTL: cacheTTL });

const getCache = (key: string) => cache.get(key);
const setCache = (key: string, value: any) => cache.set(key, value);
const delCache = (key: string) => cache.del(key);

const fetchWithCache = async (url: string): Promise<any> => {
  const cachedResponse = getCache(url);

  if (cachedResponse) {
    console.log('Returning cached response');
    return cachedResponse;
  }

  console.log('Fetching new data');
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const data = await response.json();
  setCache(url, data);
  return data;
};

const invalidateCache = (url: string): void => {
  delCache(url);
};

export default fetchWithCache;
export { invalidateCache };
