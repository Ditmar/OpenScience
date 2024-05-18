import { defineMiddleware } from 'astro:middleware';
export const auth = defineMiddleware ( (context, next) => {
    console.log('---- load auth ----');
    return next();
});