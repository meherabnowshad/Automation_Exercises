import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://www.automationexercise.com',
    headless: false,
    screenshot: 'only-on-failure',
  },
  timeout: 30000,
});
