/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vitest/config';
import { checker } from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

import reactRefresh from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    assetsDir: 'static',
  },
  plugins: [
    reactRefresh(),
    tsconfigPaths(),
    checker({
      typescript: true,
      enableBuild: true,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      all: true,
      include: ['src/**'],
      exclude: ['**/*{.,-}test.{js,cjs,mjs,ts,tsx,jsx}', 'src/{types,store,mocks}', 'src/*.*'],
      reporter: ['html', 'lcov', 'text', 'text-summary'],
    },
  },
});
