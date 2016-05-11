var helper = require('../../helper'),
    faker = require('faker');

var HomePage = function() {

    //random generates from 'faker' library
    var randomFirstName = faker.name.firstName();
    var randomLastName = faker.name.lastName();
    var randomEmail = faker.internet.email();
    var randomPassword = faker.internet.password();
    var randomUsername = faker.internet.userName();

    //title and texts of notifications/error messages
    this.pageTitle = 'Etsy :: Your place to buy and sell all things handmade';
    this.passwordExistText = 'Password was incorrect.';
    this.passwordBlankText = "Can't be blank.";

    //sign in form elements selected by id
    this.signInButton = element(by.id('sign-in'));
    this.singInLoginForm = element(by.id('signin-button'));
    this.usernameField = element(by.id('username-existing'));
    this.userPasswordField = element(by.id('password-existing'));
    this.passwordExistingError = element(by.id('password-existing-error'));
    this.usernameExistingError = element(by.id('username-existing-error'));
    this.registerTab = element(by.id('register-tab'));

    //register form elements
    this.registerButtonOnMainPage = element(by.id('register'));
    this.firstNameField = element(by.id('first-name'));
    this.lastNameField = element(by.id('last-name'));
    this.emailField = element(by.id('email'));
    this.passwordField = element(by.id('password'));
    this.passwordConfirmField = element(by.id('password-repeat'));
    this.usernameRegisterField = element(by.id('username'));
    this.etsyFinds = element(by.id('etsy_finds'));
    this.registerButtonRegisterPopUp = element(by.id('register_button'));

    //functions to interact with our page
    this.goToRegister = function() {
        helper.waitElementToBeClickable(this.registerButtonOnMainPage)
        this.registerButtonOnMainPage.click()
    }

    this.goToRegisterTab = function() {
        helper.waitElementToBeClickable(this.registerTab)
        this.registerTab.click()
    }

    this.goToLogin = function() {
        helper.waitUntilReady(this.signInButton)
        this.signInButton.click()
    }

    this.doRegister = function() {
        helper.waitUntilReady(this.firstNameField)
        this.firstNameField.sendKeys(randomFirstName)
        this.lastNameField.sendKeys(randomLastName)
        this.emailField.sendKeys(randomEmail)
        this.passwordField.sendKeys(randomPassword)
        this.passwordConfirmField.sendKeys(randomPassword)
        this.usernameRegisterField.sendKeys(randomUsername)
        helper.waitUntilReady(this.etsyFinds)
        this.etsyFinds.click()
    }
}

module.exports = HomePage;
