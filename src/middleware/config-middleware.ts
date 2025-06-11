import type { Request, Response, NextFunction } from 'express';
import { config } from '../config/config-manager';

export function configMiddleware(req: Request, res: Response, next: NextFunction) {
  res.locals.config = config;
  next();
}
