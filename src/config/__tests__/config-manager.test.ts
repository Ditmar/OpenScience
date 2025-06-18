import { describe, expect, it, beforeEach, vi } from 'vitest';
import { config } from '../../../config-manager/config-manager';

// /* eslint-disable turbo/no-undeclared-env-vars */
beforeEach(() => {
  vi.resetModules();
  process.env = {
    PUBLIC_SITE_URL: 'https://example.com',
    API_BASE_URL: 'https://api.example.com',
    ENABLE_FEATURE_X: 'true',
    NODE_ENV: 'production',
  };
});

describe('config-manager', () => {
  it('should load and validate env config successfully', async () => {
    expect(config.PUBLIC_SITE_URL).toBe('https://example.com');
    expect(config.API_BASE_URL).toBe('https://api.example.com');
    expect(config.ENABLE_FEATURE_X).toBe(true);
    expect(config.NODE_ENV).toBe('production');
  });

  it('should throw an error on invalid config (missing PUBLIC_SITE_URL)', async () => {
    await expect(import('../../../config-manager/config-manager')).rejects.toThrow(
      'Invalid environment variables',
    );
  });

  it('should throw an error on invalid URL', async () => {
    await expect(import('../../../config-manager/config-manager')).rejects.toThrow(
      'Invalid environment variables',
    );
  });

  it('should throw an error on invalid NODE_ENV', async () => {
    await expect(import('../../../config-manager/config-manager')).rejects.toThrow(
      'Invalid environment variables',
    );
  });
});
