// eslint-disable-next-line import/no-unresolved
import { defineMiddleware } from 'astro:middleware';

export const auth = defineMiddleware((context, next) => {
  return next();
});
