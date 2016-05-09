var helper = require('../../helper');
var faker = require('faker');
var HomePage = require('./home.po.js');

describe('Home page : ', function() {

    var homePage = new HomePage();

    beforeEach(function() {
        browser.get(browser.params.url);
    });

    afterEach(function() {
        browser.manage().deleteAllCookies();
    });

    var randomFirstName = faker.name.firstName();
    var randomLastName = faker.name.lastName();
    var email = faker.internet.email();
    var password = faker.internet.password();
    var username = faker.internet.userName();

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

    it('should try to sign in and vefiry that email cant be blank error appear', function() {
        homePage.goToLogin()
        helper.waitUntilReady(homePage.userPasswordField)
        homePage.userPasswordField.sendKeys('something')
        helper.waitUntilReady(homePage.singInLoginForm)
        homePage.singInLoginForm.click()
        helper.waitElementToBeVisisble(homePage.usernameExistingError)
        expect(homePage.usernameExistingError.getText()).toBe(homePage.passwordBlankText)
    });

    it('should register a new user', function() {
        homePage.goToRegister()
        helper.waitUntilReady(homePage.firstNameField)
        homePage.firstNameField.sendKeys(randomFirstName)
        homePage.lastNameField.sendKeys(randomLastName)
        homePage.emailField.sendKeys(email)
        homePage.passwordField.sendKeys(password)
        homePage.passwordConfirmField.sendKeys(password)
        homePage.usernameRegisterField.sendKeys(username)
        helper.waitUntilReady(homePage.etsyFinds)
        homePage.etsyFinds.click()
        helper.waitUntilReady(homePage.registerButtonRegisterPopUp)
    });

});
