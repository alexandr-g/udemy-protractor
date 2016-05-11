var helper = require('../../helper'),
    HomePage = require('./home.po.js');

describe('Home page : ', function() {

    var homePage = new HomePage();

    beforeEach(function() {
        browser.get(browser.params.url);
    });

    afterEach(function() {
        browser.manage().deleteAllCookies();
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual(homePage.pageTitle);
    });

    it('should try to sign in and verify that password was incorrect', function() {
        homePage.goToLogin();
        helper.waitUntilReady(homePage.usernameField);
        homePage.usernameField.sendKeys('test@test.com');
        helper.waitUntilReady(homePage.userPasswordField);
        homePage.userPasswordField.sendKeys('password');
        homePage.singInLoginForm.click();
        helper.waitUntilReady(homePage.passwordExistingError);
        expect(homePage.passwordExistingError.getText()).toBe(homePage.passwordExistText);
    });

    it('should try to sign in and vefiry that password cant be blank', function() {
        homePage.goToLogin()
        helper.waitUntilReady(homePage.usernameField)
        homePage.usernameField.sendKeys('123@test.com')
        helper.waitUntilReady(homePage.singInLoginForm)
        homePage.singInLoginForm.click()
        helper.waitUntilReady(homePage.passwordExistingError)
        expect(homePage.passwordExistingError.getText()).toBe(homePage.passwordBlankText)
    });

    it('should try to sign in and vefiry that email cant be blank', function() {
        homePage.goToLogin()
        helper.waitUntilReady(homePage.userPasswordField)
        homePage.userPasswordField.sendKeys('something')
        helper.waitUntilReady(homePage.singInLoginForm)
        homePage.singInLoginForm.click()
        helper.waitElementToBeVisisble(homePage.usernameExistingError)
        expect(homePage.usernameExistingError.getText()).toBe(homePage.passwordBlankText)
    });

    it('should navigate to register tab thru login pop up and register', function() {
        homePage.goToLogin()
        homePage.goToRegisterTab()
        homePage.doRegister()
        expect(homePage.registerButtonRegisterPopUp.isDisplayed()).toBeTruthy()
    });

    it('should register a new user', function() {
        homePage.goToRegister()
        homePage.doRegister()
        helper.waitUntilReady(homePage.registerButtonRegisterPopUp)
    });

});
