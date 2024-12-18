import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Ensure PostCSS compatibility by explicitly referencing the config
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: path.resolve(__dirname, './postcss.config.cjs'), // Point to your PostCSS config file
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Optional: Adjust for cleaner imports
    },
  },
});
