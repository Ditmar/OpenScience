import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  integrations: [react()],
  adapter: node({
    mode: 'http',
  }),
});
