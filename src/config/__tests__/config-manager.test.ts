import { describe, expect, it, beforeEach, vi } from 'vitest';

/* eslint-disable turbo/no-undeclared-env-vars */
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
    const { config } = await import('../config-manager');

    expect(config.PUBLIC_SITE_URL).toBe('https://example.com');
    expect(config.API_BASE_URL).toBe('https://api.example.com');
    expect(config.ENABLE_FEATURE_X).toBe(true);
    expect(config.NODE_ENV).toBe('production');
  });

  it('should throw an error on invalid config (missing PUBLIC_SITE_URL)', async () => {
    delete process.env.PUBLIC_SITE_URL;

    await expect(import('../config-manager')).rejects.toThrow('Invalid environment variables');
  });

  it('should throw an error on invalid URL', async () => {
    process.env.PUBLIC_SITE_URL = 'not-a-url';

    await expect(import('../config-manager')).rejects.toThrow('Invalid environment variables');
  });

  it('should throw an error on invalid NODE_ENV', async () => {
    process.env.NODE_ENV = 'staging';

    await expect(import('../config-manager')).rejects.toThrow('Invalid environment variables');
  });
});
