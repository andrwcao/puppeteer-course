const puppeteer = require('puppeteer');
const randomUserAgent = require('random-useragent');
const fs = require('fs');
const { url } = require('./config');

;(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.setDefaultTimeout(10000);
    await page.setViewport({ width: 1200, height: 800 });
    await page.setUserAgent(randomUserAgent.getRandom());

    const name_selector = '.product_main > h1';
    const price_selector = '.price_color';
    // Get data from bookstore
    await page.goto(url);
    await page.waitForSelector(name_selector);
    await page.waitForSelector(price_selector);
    const name = await page.$eval(name_selector, e => e.innerHTML);
    const price = await page.$eval(price_selector, e => e.innerHTML);  
    const nameTrim = name.trim();
    const priceTrim = price.trim(); 
    // Get current date and time
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const fullDate = `${day}/${month}/${year}`;

    const logger = fs.createWriteStream('log.txt', { flags: 'a' });
    logger.write(`${fullDate} - ${nameTrim} - ${priceTrim}`);
    await browser.close();
})().catch(error => {
    console.log(error);
    process.exit(1);
})
