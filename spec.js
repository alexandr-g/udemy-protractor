var helper = require('./helper');
var faker = require('faker');

describe('Main page : login/register', function() {

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
    var username = faekr.internet.userName();

    it('should have a title', function() {
        var title = 'Etsy - Your place to buy and sell all things handmade, vintage, and supplies';
        expect(browser.getTitle()).toEqual(title);
    });

    it('should sign in and verify that password error appear', function() {

        var signInButton = element(by.id('sign-in'));
        var singInLoginForm = element(by.id('signin-button'));

        var usernameField = element(by.id('username-existing'));
        var userPasswordField = element(by.id('password-existing'));

        var passwordExistingError = element(by.id('password-existing-error'));

        signInButton.click();
        helper.waitUntilReady(usernameField);
        usernameField.sendKeys('test@test.com');
        helper.waitUntilReady(userPasswordField);
        userPasswordField.sendKeys('password');
        singInLoginForm.click();
        helper.waitUntilReady(passwordExistingError);

        expect(passwordExistingError.getText()).toBe('Password was incorrect.');
    });

    it('should register a new user', function() {

        var registerButtonOnMainPage = element(by.id('register'));

        var firstNameField = element(by.id('first-name'));
        var lastNameField = element(by.id('last-name'));
        var emailField = element(by.id('email'));
        var passwordField = element(by.id('password'));
        var passwordConfirmField = element(by.id('password-repeat'));
        var usernameRegisterField = element(by.id('username'));

        var etsyFinds = element(by.id('etsy_finds'));
        var registerButtonRegisterPopUp = element(by.id('register_button'));

        registerButtonOnMainPage.click()
        helper.waitUntilReady(firstNameField)
        firstNameField.sendKeys(randomFirstName)
        lastNameField.sendKeys(randomLastName)
        emailField.sendKeys(email)
        passwordField.sendKeys(password)
        passwordConfirmField.sendKeys(password)
        usernameRegisterField.sendKeys(username)
        helper.waitUntilReady(etsyFinds)
        etsyFinds.click()
        helper.waitUntilReady(registerButtonRegisterPopUp)
    });

});
