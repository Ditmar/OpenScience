import { defineMiddleware } from 'astro:middleware';
import type{ Config } from '../types/config';
export const errors = defineMiddleware ( async(context, next) => {    
    const defineErrorPages: Config = {
        path: '/errors'
    }
    console.log('dataos');
    const { redirect } = context;
    const errorMapping: Record<number, string> = {
        404: `${defineErrorPages.path}/400`,
        500: `${defineErrorPages.path}/500`
    }
    const response = await next();
    if (response.status > 399) {
        return redirect(errorMapping[response.status]);
    }
    return next();
});