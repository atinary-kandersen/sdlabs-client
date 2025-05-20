import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', { target: '19' }]]
      }
    })
  ],
  appType: 'spa',
  envPrefix: 'ATI_',
  server: {
    open: true
  },
  preview: {
    port: 4173,
    open: true
  }
});
