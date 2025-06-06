import { describe, expect, it } from 'vitest';
import { config } from '../config/config-manager';

describe('config-manager', () => {
  it('should load and validate env config', () => {
    expect(config.API_BASE_URL).toMatch(/^https?:\/\//);
    expect(typeof config.ENABLE_FEATURE_X).toBe('boolean');
  });
});
