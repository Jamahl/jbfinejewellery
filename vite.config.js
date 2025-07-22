import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Base path for GitHub Pages deployment
  base: '/',
  plugins: [react()],
  server: {
    port: 5173,
  },
});
