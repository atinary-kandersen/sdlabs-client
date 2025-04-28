import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['module:@preact/signals-react-transform']]
      }
    })
  ],
  appType: 'spa',
  envPrefix: 'ATI_',
  preview: {
    open: true
  }
});
