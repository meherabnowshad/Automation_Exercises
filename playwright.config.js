import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://www.automationexercise.com',
    headless: false, // Set to true for CI/CD runs
    screenshot: 'only-on-failure',
  },
  timeout: 30000,
});
