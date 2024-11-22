import test, { Page } from '@playwright/test';
import fs from 'fs';
import path from 'path';

export class ScreenshotHelper {

  public static async captureScreenshots(page: Page) {
    
    // Ensure the screenshots directory exists
    const screenshotsDir = './test-results/screenshots';
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir, { recursive: true });
    }

    // Get the test title and extract the initial part (e.g., 'TC232370')
    const fullTitle = test.info().title;
    const match = fullTitle.match(/^TC\d+/); // Match 'TC' followed by digits
    const initialPart = match ? match[0] : 'screenshot'; // Default to 'screenshot' if no match found
    
    // Get current Date and Time
    const currentDateTime = new Date().toISOString()
      .replace(/-/g, '')    // Remove all hyphens
      .replace(/:/g, '')    // Remove all colons
      .replace(/\.\d{3}Z$/, '');  // Remove the milliseconds and the 'Z'

    // Capture screenshot with the initial part of the title and a sequential number
    const screenshotPath = path.join(screenshotsDir, `${initialPart}-${currentDateTime}.png`);
    await page.screenshot({ path: screenshotPath });

    // Attach screenshot to the test report
    test.info().attachments.push({
      name: path.basename(screenshotPath),
      path: screenshotPath,
      contentType: 'image/png',
    });

  }
  
}
