import { defineMiddleware } from 'astro:middleware';
import type { Locals } from 'src/types/locals';

export const loadEnvs = defineMiddleware ( (context, next) => {
    //controlar si existen 
    context.locals = {
        API_END_POINT: import.meta.env.API_END_POINT,
        API_KEY: import.meta.env.API_KEY,
        API_BASE_ROUTE: import.meta.env.API_BASE_ROUTE,
        DOMAIN: import.meta.env.DOMAIN
    } as Locals
    return next();
});