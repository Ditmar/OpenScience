import { config } from '../config/config-manager';
import type { Request, Response, NextFunction } from 'express';

export function configMiddleware(req: Request, res: Response, next: NextFunction) {
  res.locals.config = config;
  next();
}