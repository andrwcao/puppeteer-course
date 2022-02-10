import { expect } from 'chai'
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
        await desktop.goto('http://zero.webappsecurity.com/index.html')
        const signInButtonVisible = await desktop.isElementVisible('#signin_button')
        expect(signInButtonVisible).to.be.true
    })

    step('should go to login form', async () => {
        await desktop.waitAndClick('#signin_button')
        const loginFormVisible = await desktop.isElementVisible('#login_form')
        expect(loginFormVisible).to.be.true
    })

    step('should login to application', async () => {
        await desktop.waitAndType('#user_login', 'username')
        await desktop.waitAndType('#user_password', 'password')
        await desktop.waitAndClick('.btn-primary')
        const navbar = await desktop.isElementVisible('.nav-tabs')
        expect(navbar).to.be.true
    })

})