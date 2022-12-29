const { Builder, By, Key } = require('selenium-webdriver');
const assert = require('assert');
const HerokuaAppPage = require('../pages/HerokuappPage');

describe("Login Test Scenarios", function() {
    let driver;
    let herokuaPage;

    beforeEach( async function() {
        driver = await new Builder().forBrowser('chrome').build();
        herokuaPage = new HerokuaAppPage(driver);
        await herokuaPage.getURL();
    });

    afterEach(async function() {
        await driver.quit();
    })

    describe('User Test Login Functionality', async function() {

        it('User attempt login with empty field', async function() {
            await herokuaPage.loginFlow(" ", " ")
            await assert(herokuaPage.incorrectLoginMessage())
        });

        it('User attempt login with incorrect Data', async function() {
            await herokuaPage.loginFlow("abceaca", "1232133c")
            await assert(herokuaPage.incorrectLoginMessage())
        });



        it('User Logins with Correct credentials', async function(){
            await herokuaPage.loginFlow("tomsmith", "SuperSecretPassword!")
            await assert(herokuaPage.correctLoginMessage(), "success message is correct!")
        });

    });

});