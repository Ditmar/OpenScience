// eslint-disable-next-line import/no-extraneous-dependencies
import fetch from 'node-fetch';
import { getCache, setCache, delCache } from './utils';
import type { HeadersConfig } from './types/headers';

class FetchCache<T> {
  private url: string;

  private headers: HeadersConfig;

  private method: string;

  constructor(url: string, headers: HeadersConfig, method = 'GET') {
    this.url = url;
    this.headers = headers;
    this.method = method;
  }

  getHeaders = () => {
    return {
      'Content-Type': 'application/json',
      ...this.headers,
    };
  };

  get = async (): Promise<T> => {
    const responseCache = getCache(this.url);
    if (responseCache) {
      return responseCache as T;
    }
    const response = await fetch(this.url, {
      method: this.method,
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const data = await response.json();
    this.set(data as T);
    return data as T;
  };

  set = (value: T) => setCache(this.url, value);

  del = () => delCache(this.url);
}

export default FetchCache;
