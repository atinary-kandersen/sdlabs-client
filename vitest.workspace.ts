import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  {
    extends: 'vite.config.ts',
    test: {
      include: ['./src/**/*.test.node.ts'],
      name: 'node',
      environment: 'node',
      globals: true
    }
  },
  {
    extends: 'vite.config.ts',
    test: {
      include: ['./src/**/*.test.browser.{ts,tsx}'],
      name: 'browser',
      globals: true,
      browser: {
        enabled: true,
        provider: 'playwright',
        // https://vitest.dev/guide/browser/playwright
        instances: [
          {
            browser: 'chromium'
          }
        ]
      }
    }
  }
]);
