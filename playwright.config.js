import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://www.automationexercise.com',
    headless: false,
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'brave',
      use: {
        browserName: 'chromium',
        launchOptions: {
          executablePath: '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
          slowMo: 500,
        },
      },
    },
  ],
  timeout: 30000,
});
