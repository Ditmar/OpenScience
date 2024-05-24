// eslint-disable-next-line import/no-unresolved
import { sequence } from 'astro:middleware';
import { loadEnvs } from './loadEnvs';
import { errors } from './errors';
import { auth } from './auth';

export const onRequest = sequence(loadEnvs, errors, auth);
