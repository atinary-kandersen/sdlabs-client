import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  appType: 'spa',
  envPrefix: 'ATI_',
  preview: {
    port: 4173,
    open: true
  }
});
