import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const configSchema = z.object({
  PUBLIC_SITE_URL: z.string().url(),
  API_BASE_URL: z.string().url(),
  ENABLE_FEATURE_X: z.string().transform((v) => v === 'true'),
  NODE_ENV: z.enum(['dev', 'prod', 'qa']),
});

const { success, data } = configSchema.safeParse(process.env);

if (!success) {
  throw new Error('Invalid environment variables');
}

export const config = data;
