import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias para src
      '@lib': path.resolve(__dirname, 'src/lib'), // Alias para src/lib
      '@components': path.resolve(__dirname, 'src/components'), // Alias para src/components
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});

