// eslint-disable-next-line import/no-unresolved
import { defineMiddleware } from 'astro:middleware';
import type { Locals } from '../types/locals';

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
  } as Locals;
  return next();
});
