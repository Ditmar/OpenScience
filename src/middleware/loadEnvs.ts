// eslint-disable-next-line import/no-unresolved
import { defineMiddleware } from 'astro:middleware';
import type { Locals, ArticlesApiResponse } from '../types/locals';

import FetchCache from '../fetch/fetch';

async function fetchData(API_ROUTE: string) {
  const fetcher = new FetchCache<ArticlesApiResponse>(API_ROUTE, {});

  try {
    const response = await fetcher.get();
    return response;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return null;
  }
}

export const loadEnvs = defineMiddleware((context, next) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  context.locals = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    API_END_POINT: import.meta.env.API_END_POINT,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    API_KEY: import.meta.env.API_KEY,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    API_BASE_ROUTE: import.meta.env.API_BASE_ROUTE,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    DOMAIN: import.meta.env.DOMAIN,
    collections: (API_ROUTE: string) => {
      return fetchData(API_ROUTE);
    },
  } as unknown as Locals;
  return next();
});
