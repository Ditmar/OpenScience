# Config Manager

## Objective

Centralize, validate, and type the project's environment variables using [Zod](https://zod.dev/), ensuring their availability on both the Express server and the Astro SSR environment.

---

## Why use a Config Manager?

- **Robust validation:** Detects configuration errors at startup.
- **Strict typing:** Prevents errors at development time.
- **Centralization:** A single place to define and modify required environment variables.
- **Hybrid compatibility:** Works on both Express and Astro SSR.

---

## Implementation

### 1. Validation and typing with Zod

The `config-manager.ts` file defines the schema for the required environment variables and validates them upon application startup. If any variable is invalid or missing, the app fails to start and throws a clear error.

```typescript
// config-manager/config-manager.ts
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
```

---

### 2. Middleware for Express

The `config-middleware.ts` middleware injects the validated configuration into `res.locals.config` so that it is available to any Express handler.

```typescript
// src/middleware/config-middleware.ts
import type { Request, Response, NextFunction } from 'express';
import { config } from '../../config-manager/config-manager';

export function configMiddleware(req: Request, res: Response, next: NextFunction) {
  res.locals.config = config;
  next();
}
```

**Use in Express:**

```typescript
import express from 'express';
import { configMiddleware } from '../middleware/config-middleware';

const app = express();
app.use(configMiddleware);

// You can now access res.locals.config in your routes
```

---

### 3. Access from Astro SSR

Thanks to the integration with Express, validated environment variables are available in the Astro SSR context via `Astro.locals.config`.

**Example usage in Astro:**

```typescript
// On an Astro SSR endpoint or page
const config = Astro.locals.config;
console.log(config.API_BASE_URL);
```

---

### 4. Unit Tests

The `config-manager.test.ts` file contains tests that verify:

- Successful loading and validation of variables.
- Clear errors when a variable is missing or invalid.
- Correct typing of values.

---

## Best Practices

- **Add new variables only in `config-manager.ts`** and update the Zod schema.
- **Do not directly access `process.env`** in business code; always use `config`.
- **Keep tests up to date** if you change the configuration schema.
- **Document each variable** in this README to facilitate onboarding.

---

## Notes

- This system does not affect current business logic or endpoints, but **should be considered in all SSR routes and Express handlers** that depend on environment variables.
- If you add new variables, remember to update the schema and tests.