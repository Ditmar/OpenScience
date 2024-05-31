import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';
import seo from 'astro-seo';
import seoConfig from './seo.config';

export default defineConfig({
  output: 'server',
  integrations: [react(), seo(seoConfig)],
  adapter: node({
    mode: 'http',
  }),
});
