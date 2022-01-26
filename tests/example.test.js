const puppeteer = require('puppeteer');
const { expect } = require('chai');
describe('My First Puppeteer Test', () => {
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
    });

    beforeEach(async function() {

    });

    afterEach(async function() {

    });

    after(async function() {
        await browser.close();
    });

    it('Should launch browser', async function() {
        await page.goto('http://example.com');
        await page.waitForXPath('//h1');
        const title = await page.title();
        const url = await page.url();
        const count = await page.$$eval('p', element => element.length);
        console.log(count);
        expect(title).to.be.equal('string', ' Domain');
        await page.keyboard.press('Enter', { delay: 10 });
        await page.waitForTimeout(() => !document.querySelector('#button'));
        await page.waitForSelector('#button', { hidden: true });
    });


});