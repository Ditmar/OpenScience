## 🛠️ Centralized Configuration with Validation (Astro + Express)

This project implements a centralized system for validating and accessing environment variables (`.env`) at runtime, using `Zod` for validation and exposing that configuration in both Express routes and Astro pages via `res.locals` and `Astro.locals`.

---

### 📁 File Structure

```
src/
├── config/
│      ├── __tests__/
│      │      └── config-manager.test.ts    # Unit tests for configuration
│      │ 
│      └── config-manager.ts                # Loads and validates environment variables
│
├── middleware/
│      └── config-middleware.ts    # Injects configuration into res.locals
│
├── types/
│      └── locals.d.ts             # Defines the shape of Astro.locals.config
│
├── pages/
│      └── index.astro             # Example of accessing Astro.locals.config
│
├── env.d.ts        # Global typing
│
└── astro-env.d.ts  # Extends Astro typing
```

---

## 🔧 1. Environment variable validation

[FILE](../src/config/config-manager.ts): `src/config/config-manager.ts` 

```ts
import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const configSchema = z.object({
  PUBLIC_SITE_URL: z.string().url(),
  API_BASE_URL: z.string().url(),
  ENABLE_FEATURE_X: z.string().transform((v) => v === 'true'),
  NODE_ENV: z.enum(['development', 'production', 'test']),
  // additional environment variables can be defined here
});

const parsed = configSchema.safeParse(process.env);

if (!parsed.success) {
  console.error('Invalid environment variables:', parsed.error.format());
  throw new Error('Invalid environment variables');
}

export const config = parsed.data;
export type AppConfig = z.infer<typeof configSchema>;
```

---

## 🔗 2. Express Middleware

[FILE](../src/middleware/config-middleware.ts): `src/middleware/config-middleware.ts`

```ts
import { config } from '../config/config-manager';
import type { Request, Response, NextFunction } from 'express';

export function configMiddleware(req: Request, res: Response, next: NextFunction) {
  res.locals.config = config;
  next();
}
```

---

## 🚀 3. Injection in Astro.locals

[FILE](../src/server/index.ts): `src/server/index.ts`

```ts
import express, { type RequestHandler } from 'express';
import { configMiddleware } from '../middleware/config-middleware';
import { handler as astroHandler } from '../../dist/server/entry.mjs';

const app = express();
app.use(configMiddleware);

app.use((req, res, next) => {
  const handler = astroHandler as unknown;

  function isRequestHandler(fn: unknown): fn is RequestHandler {
    return typeof fn === 'function';
  }

  if (isRequestHandler(handler)) {
    handler(req, res, next);
    return;
  }

  res.status(500).send('Internal Server Error');
});
```

---

## 🌍 4. Access from Astro (how to use...)

File: `src/pages/index.astro` or other .astro file

```astro
---
const { config } = Astro.locals;

console.log(config.API_BASE_URL); // direct use
---
```

---

## 🧠 5. Typing `Astro.locals`

[FILE](../src/astro-env.d.ts): `src/astro-env.d.ts`

```ts
import type { Locals } from './types/locals';

declare module 'astro' {
  interface AstroGlobal {
    locals: Locals;
  }
}
```

[FILE](../src/types/locals.d.ts): `src/types/locals.d.ts`

```ts
import type { AppConfig } from '../config/config-manager';

export interface ArticlesApiResponse {
  data: {
    id: number;
    attributes: {
      title: string;
      date: string;
      complete_text: string;
      brief: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }[];
}
export interface Locals {
  API_END_POINT: string;
  API_KEY: string;
  API_BASE_ROUTE: string;
  DOMAIN: string;
  collections: (API_ROUTE: string) => Promise<ArticlesApiResponse>;

  config: AppConfig;
}
```

---

## 🧪 6. Unit tests

[FILE](../src/config/__tests__/config-manager.test.ts): `src/config/__tests__/config-manager.test.ts`



### Run tests

```bash
# Run tests of this file
yarn vitest watch src/config/__tests__/config-manager.test.ts
```

> Make sure you have the `.env` file configured correctly when running the tests.

---

## ✅ Best Practices

* ✅ Keep `config-manager.ts` as the single source of truth for your environment variables.
* ✅ Validate everything with `Zod` to avoid errors in production.
* ✅ Use `Astro.locals.config` in SSR and `res.locals.config` in API routes.
* ✅ Define your types clearly in `types/locals.d.ts` and `astro-env.d.ts`.
* ✅ Write unit tests to ensure your configuration is valid.

---