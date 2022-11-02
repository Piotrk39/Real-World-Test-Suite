const { expect } = require('@playwright/test');


export default class sampleDownload {

    //Banks data
    constructor(page) {
      this.resume = page.getByRole('link', { name: 'Resume' });
      this.download = page.getByRole('button', { name: 'Download CV' }).first();
    }

    async redirectToCvDownload() {
      await this.resume.click();
      await expect(this.download).toHaveText('Download CV');
    }

    async downloadFile(locator, page)  {
      const [ download ] = await Promise.all([
          page.waitForEvent('download'),
          locator.click({ modifiers: ["Alt",] })
        ]);
  
        // const path = await download.path();
        // return path;
    }
}