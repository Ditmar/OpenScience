import NodeCache from 'node-cache';
import { useEffect, useState } from 'react';

const cacheTTL = Number(process.env.CACHE_TTL) || 600;

const cache = new NodeCache({ stdTTL: cacheTTL });

function getCache<T>(key: string): T[] {
  return cache.get(key)!;
}

function setCache<T>(key: string, value: T[]) {
  cache.set(key, JSON.stringify({ data: value }));
}

function delCache(key: string) {
  cache.del(key);
}

export function useCache<T>(url: string): {
  data: T[];
  loading: boolean;
  error: Error | undefined;
} {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const fetchData = async () => {
      const cacheResponse: T[] = getCache(url);
      if (cacheResponse !== undefined) {
        setData(cacheResponse);
        setLoading(false);
      } else {
        try {
          const res = await fetch(url);
          if (!res.ok) {
            throw new Error(`Failed to fetch data from ${url}`);
          }
          const dataJson = (await res.json()) as T[];
          setCache(url, dataJson);
          setData(dataJson);
        } catch (e) {
          if (e instanceof Error) setError(e);
          else setError(new Error('An unknown error occurred'));
        } finally {
          setLoading(false);
        }
      }
    };
    fetchData().catch((e: unknown) => {
      if (e instanceof Error) setError(e);
      else setError(new Error('An unknown error occurred'));
    });
  }, [url]);

  return { data, loading, error };
}

export function invalidateCache(url: string): void {
  delCache(url);
}
