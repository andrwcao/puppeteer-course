const puppeteer =  require('puppeteer');
const expect = require('mocha').expect;

describe('Login Test', () => {
    let browser;
    let page;

    before(async function(){
        // Responsible for spinning up the browser
        browser = await puppeteer.launch({ 
            headless: false, 
            slowMo: 10, 
            devtools: false 
        });
        page = await browser.newPage();
        await page.setDefaultTimeout(10000);
        await page.setDefaultNavigationTimeout(20000);
    });

    after(async function() {
        await browser.close();
        await page.type('#sp_date', '2020-03-18');
        await page.keyboard.press('Enter');
    });


});