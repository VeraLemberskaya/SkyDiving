import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@app': path.resolve('./src/app'),
      '@assets': path.resolve('./src/assets'),
      '@components': path.resolve('./src/components'),
      '@constants': path.resolve('./src/constants'),
      '@layouts': path.resolve('./src/layouts'),
      '@modules': path.resolve('./src/modules'),
      '@pages': path.resolve('./src/pages'),
      '@utils': path.resolve('./src/utils'),
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
