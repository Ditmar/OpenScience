import { getEnvironment } from '../utils/environments';

export const defaultConfig = {
  DEFAULT_CACHE_TTL_MS: parseInt(getEnvironment('FETCH_CACHE_TTL_MS', '300000'), 10),
};
