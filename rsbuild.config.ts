import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      popup: './src/popup.tsx',
      background: './src/background.ts', // Optional: Add background script
    },
  },
  output: {
    distPath: {
      root: 'dist',
      js: '',
      css: '',
    },
    filename: {
      js: '[name].js',
      css: '[name].js',
    },
    copy: [{ from: 'public', to: '.' }],
  },
  dev: {
    writeToDisk: true,
  }
});
