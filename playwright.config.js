// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Directory for test files

  timeout: 40 * 1000, // Global timeout for each test

  expect: {
    timeout: 40 * 1000, // Timeout for assertions
  },

  use: {
    browserName: 'chromium', // Use Chromium browser
    headless: true, // Run tests in headless mode (set to false for UI mode)
  },
});
