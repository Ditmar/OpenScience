import express, { type RequestHandler } from 'express';
import { configMiddleware } from '../middleware/config-middleware';
// @ts-expect-error: astroHandler is only available after Astro SSR build
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
