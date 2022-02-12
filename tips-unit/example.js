const puppeteer = require("puppeteer");

const screenshot = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.example.com', { waitUntil: "networkidle0"});
    await page.screenshot({ path: "example.png", fullPage: true });
    await browser.close();
};

const pdf = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.example.com', { waitUntil: "networkidle0"});
    await page.pdf({ path: "example.pdf", format: 'A4' });
    await browser.close();
};

const emulate = async () => {
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    await page.emulate(puppeteer.devices["iPhone X"]);
    await page.goto('https://www.example.com');
    await browser.close();
};

const geolocation = async () => {

    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();

    const context = browser.defaultBrowserContext();
    await context.overridePermissions('https://pptr.dev', ['geolocation']);

    await page.goto('https://pptr.dev');
    await page.waitForSelector('title');
    await page.waitForTimeout(5000);
    await page.setGeolocation({ latitude: 90, longitude: 0 });
    await browser.close();
};

(async () => {
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    await page.emulate(puppeteer.devices["iPhone X"]);
    await page.goto('https://www.example.com');
    await browser.close();
})();

(async () => {
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    await page.emulate(puppeteer.devices["iPhone X"]);
    await page.goto('https://www.example.com');
    await browser.close();
})();

(async () => {
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    await page.emulate(puppeteer.devices["iPhone X"]);
    await page.goto('https://www.example.com');
    await browser.close();
})();