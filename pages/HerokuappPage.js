const BasePage = require('./BasePage');



//Locators
const URL = 'https://the-internet.herokuapp.com/login'
const usernameInput  = {css: '#username'}
const passwordInput = {css: '#password'}
const loginButton = {css: 'button'}
const loginSuccessMessage = {xpath: '//*[@id="flash"]'}
const loginFailureMessage = {css: 'flash.error'}

class HerokuappPage extends BasePage {
    constructor(driver) {
        super(driver);

    };
    async getURL() {
        await this.goToUrl(URL);
    };

    async loginFlow(username, password) {
        await this.type(usernameInput, username);
        await this.type(passwordInput, password);
        await this.clickOn(loginButton);
    };

    async correctLoginMessage() {
        return await this.clickContainText(loginSuccessMessage, "You logged into a secure area!");
    };

    async incorrectLoginMessage() {
        return await this.isDisplayed(loginFailureMessage);
    };



}

module.exports = HerokuappPage;




