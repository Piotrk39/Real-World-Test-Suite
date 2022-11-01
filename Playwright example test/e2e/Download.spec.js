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
        
        await download.redirectToCvDownload();
        const [ downl ] = await Promise.all([
            // Start waiting for the download
            page.waitForEvent('download'),
            // page.on('download', download => download.path().then(console.log)),
            // Perform the action that initiates download
            download.download.click(),
            download.downloadDirect.click(),
          ]);
          // Wait for the download process to complete
          console.log(await downl.path());
    });
});