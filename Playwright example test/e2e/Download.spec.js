import sampleDownload from '../sampleData/downloadData';
const { test, expect } = require('@playwright/test');

test.describe("Download test", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://piotrk-portfolio.netlify.app/');
  });

    test("Opens portfolio page and navigates to resume", async ({ page }) => {
        // Assertions use the expect API.
        const download = new sampleDownload(page);
        
        download.redirectToCvDownload();
    });
});