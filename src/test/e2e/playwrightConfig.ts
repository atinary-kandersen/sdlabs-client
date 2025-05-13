import { object, parse, pipe, string, url } from 'valibot';
import playwrightConfigFile from '../../../playwright.config.ts';

const configSchema = object({
  webServer: object({
    url: pipe(string(), url())
  })
});

const playwrightConfig = parse(configSchema, playwrightConfigFile);
export default playwrightConfig;
