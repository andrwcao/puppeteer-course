const puppeteer = require('puppeteer');

describe('Device Emulation', () => {
    let browser;
    let page;
    before(async function(){
        // Responsible for spinning up the browser
        browser = await puppeteer.launch({ 
            headless: false, 
            slowMo: 10, 
            devtools: false 
        });
        const context = await browser.createIncognitoBrowserContext();
        page = await context.newPage();
        await page.setDefaultTimeout(10000);
        await page.setDefaultNavigationTimeout(20000);
    });

    after(async function(){
        await browser.close();
    });

    it('Desktop Device Test', async function(){
        await page.setViewport({ width: 1650, height: 1050 });
        await page.goto('http://example.com');
        await page.waitForTimeout(5000);
    });

    it('Tablet Device Test', async function(){
        const tablet = puppeteer.devices['iPad landscape'];
        await page.emulate(tablet);
        await page.goto('http://example.com');
        await page.waitForTimeout(5000);
    });
});