import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/sass/app.scss', 'resources/js/index.tsx'],
      refresh: true,
    }),
    react(),
    reactRefresh(),
  ],
  resolve: {
    alias: {
      state: path.resolve('resources/js/state'),
      components: path.resolve('resources/js/components'),
      lib: path.resolve('resources/js/lib'),
      translations: path.resolve('resources/js/translations'),
      styles: path.resolve('resources/styles'),
    },
  },
});
