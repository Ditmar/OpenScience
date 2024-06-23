import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as ViteReact from '@vitejs/plugin-react';

export default defineConfig({
  output: 'server',
  integrations: [react()],
  adapter: node({
    mode: 'http',
  }),
  vite: {
    plugins: [
      ViteReact({
        bable: {
          plugins: [['babel-plugin-styled-components', { displayName: true, fileName: false }]],
        },
      }),
    ],
    ssr: {
      noExternal: ['path-to-regexp'],
    },
  },
});
