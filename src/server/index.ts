import express from 'express';
import { configMiddleware } from '../middleware/config-middleware';
import { handler as astroHandler } from '../../dist/server/entry.mjs';

const app = express();
app.use(configMiddleware);
app.use(async (req, res, next) => {
  const handlerWithLocals = astroHandler({
    locals: {
      config: res.locals.config,
    },
  });

  if (typeof handlerWithLocals === 'function') {
    return (handlerWithLocals as Function)(req, res, next);
  }
  return handlerWithLocals;
});
