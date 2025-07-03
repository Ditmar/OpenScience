import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async ({ cookies }, next) => {
  const idleTimeout = String(import.meta.env.PUBLIC_IDLE_TIMEOUT || '10000');
  const warningDuration = String(import.meta.env.PUBLIC_IDLE_WARNING_DURATION || '10000');

  cookies.set('idleTimeout', idleTimeout, { path: '/' });
  cookies.set('warningDuration', warningDuration, { path: '/' });

  return next();
};
