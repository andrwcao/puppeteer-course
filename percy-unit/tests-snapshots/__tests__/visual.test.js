const puppeteer = requier('puppeteer')
const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot })

describe('Visual Regression Testing', () => {
    let browser
    let page

    beforeAll(async function() {
        browser = await puppeteer.launch({ headless: true })
        page = await browser.newPage()
    })

    afterAll(async function() {
        await browser.close()
    })

    test('Full Page Snapshot', async function() {
        await page.onto('https://www.example.com')
        await page.waitForSelector('h1')
        const image = await page.screenshot()
        expect(image).toMatchImageSnapshot({
            failurThresholdType: "pixel",
            failureThreshold: 500,
        })
    })
})