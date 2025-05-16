import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import svgr from 'vite-plugin-svgr';
import sitemap from 'astro-sitemap';
import astroI18next from 'astro-i18next';

export default defineConfig({
  site: 'http://localhost:4321/',
  output: 'server',
  integrations: [react(), astroI18next(), sitemap()],
  adapter: node({
    mode: 'http',
  }),
  vite: {
    ssr: {
      noExternal: ['path-to-regexp', 'astro-seo'],
    },
    plugins: [
      svgr({
        include: '**/*.svg?react',
        exclude: '',
        svgrOptions: {
          icon: true,
          dimensions: false,
          runtimeConfig: true,
          svgProps: {
            className: 'w-full h-full',
            fill: 'currentColor',
            role: 'img',
          },
          svgoConfig: {
            plugins: [
              {
                name: 'removeAttrs',
                params: {
                  attrs: '(data-name|style)',
                },
              },
              {
                name: 'cleanupIDs',
                active: true,
              },
              {
                name: 'prefixIds',
                active: true,
              },
              {
                name: 'removeXMLNS',
                active: true,
              },
            ],
          },
          exportType: 'default',
          expandProps: 'end',
          ref: true,
          titleProp: true,
          descProp: true,
        },
      }),
    ],
  },
});
