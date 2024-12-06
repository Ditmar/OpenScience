import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import sitemap from 'astro-sitemap'; // Importa la integración de sitemap
import astroI18next from 'astro-i18next';

export default defineConfig({
  site: 'http://localhost:4321/', // Cambia esto al dominio real en producción
  output: 'server',
  integrations: [
    react(),
    astroI18next(),
    sitemap(), // Configura automáticamente el sitemap
  ],
  adapter: node({
    mode: 'http', // Configura el adaptador Node.js en modo HTTP
  }),
  vite: {
    ssr: {
      noExternal: ['path-to-regexp', 'astro-seo'], // Incluye dependencias necesarias
    },
  },
});
