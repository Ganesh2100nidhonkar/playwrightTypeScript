import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './Tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: 2,

  workers: process.env.CI ? 2 : undefined,

  reporter: [['html', { outputFile: 'test-results/results.html' }]],

  // Timeouts
  timeout: 180 * 1000, // 180 seconds
  expect: { timeout: 120 * 1000 }, // 120 seconds

  use: {

    trace: 'off',
    video: 'on-first-retry',
    screenshot: 'on',
    headless: true,


    // Timeouts
    actionTimeout: 30 * 1000, // 30 seconds

  },


  /* Configure projects for major browsers */
  projects: [

    {
      name: 'all-tests',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          args: ['--start-maximized']
        },
        viewport: { width: 1920, height: 1080 },
      },
    },

    {
      name: 'new-tests',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          args: ['--start-maximized']
        },
        viewport: { width: 1920, height: 1080 },
      },
      grep: /@New/,

    },

    {
      name: 'smoke-tests',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          args: ['--start-maximized']
        },
        viewport: { width: 1920, height: 1080 },
      },
      grep: /@Smoke/,

    },

    {
      name: 'updated-tests',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          args: ['--start-maximized']
        },
        viewport: { width: 1920, height: 1080 },
      },
      grep: /@Updated/,

    },

  ],

});
