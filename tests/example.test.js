const puppeteer = require('puppeteer');
const { expect } = require('chai');

const { click, getText, getCount } = require('../lib/helpers');

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

    it('Browser tests', async function() {
        await page.goto('http://zero.webappsecurity.com/index.html');
        await click(page, '#feedback');
        await getText(page, 'h3');
        await getCount(page, 'p');
    });
    

});