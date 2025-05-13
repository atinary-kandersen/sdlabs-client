import { expect, test } from 'playwright/test';
import playwrightConfig from './playwrightConfig';

test('has title', async ({ page }) => {
  await page.goto(playwrightConfig.webServer.url);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/SDLabs v2/);
});
