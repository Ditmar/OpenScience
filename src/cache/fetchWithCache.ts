import { getCache, setCache, delCache } from './cache';

const fetchWithCache = async (url: string): Promise<unknown> => {
  const cachedResponse = getCache(url);

  if (cachedResponse) {
    console.log('Returning cached response');
    return cachedResponse;
  }

  console.log('Fetching new data');
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status.toString()}`);
  }

  const data = (await response.json()) as unknown;
  setCache(url, data);
  return data;
};

export const invalidateCacheForUrl = (url: string): void => {
  delCache(url);
};

export default fetchWithCache;
