import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const configSchema = z.object({
  PUBLIC_SITE_URL: z.string().url(),
  API_BASE_URL: z.string().url(),
  ENABLE_FEATURE_X: z.string().transform((v) => v === 'true'),
  NODE_ENV: z.enum(['development', 'production', 'test']),
  //additional environment variables can be defined here
});

const _parsed = configSchema.safeParse(process.env);

if (!_parsed.success) {
  console.error('Invalid environment variables:', _parsed.error.format());
  throw new Error('Invalid environment variables');
}

export const config = _parsed.data;
export type AppConfig = typeof config;