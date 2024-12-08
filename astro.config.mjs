import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';
import astroI18next from 'astro-i18next';

export default defineConfig({
  output: 'server',
  integrations: [react(), astroI18next()],
  adapter: node({
    mode: 'http',
  }),
  vite: {
    ssr: {
      noExternal: ['path-to-regexp'],
    },
  },
});