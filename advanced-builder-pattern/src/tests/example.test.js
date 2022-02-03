import { step } from 'mocha-steps'
import Page from '../builder.js'
describe('Mocha steps', () => {
    let desktop
    let mobile

    before(async () => {
        desktop = await Page.build('Desktop');
        await desktop.setDefaultTimeout(7000);

        mobile = await Page.build('Mobile');
    })

    after(async () => {
        await desktop.close();
        await mobile.close();
    })

    step('should load google homepage', async () => {
        await desktop.goto('https://google.com');
    })

    step('step 2', async () => {

    })

    step('step 3', async () => {
        
    })

    step('step 4', async () => {
        
    })
})