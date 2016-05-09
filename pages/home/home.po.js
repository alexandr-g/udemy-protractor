var helper = require('../../helper');

var HomePage = function() {

    this.pageTitle = 'Etsy :: Your place to buy and sell all things handmade';
    this.passwordExistText = 'Password was incorrect.';
    this.passwordBlankText = "Can't be blank.";

    // id
    this.signInButton = element(by.id('sign-in'));
    this.singInLoginForm = element(by.id('signin-button'));
    this.usernameField = element(by.id('username-existing'));
    this.userPasswordField = element(by.id('password-existing'));
    this.passwordExistingError = element(by.id('password-existing-error'));
    this.usernameExistingError = element(by.id('username-existing-error'));

    //register
    this.registerButtonOnMainPage = element(by.id('register'));

    this.firstNameField = element(by.id('first-name'));
    this.lastNameField = element(by.id('last-name'));
    this.emailField = element(by.id('email'));
    this.passwordField = element(by.id('password'));
    this.passwordConfirmField = element(by.id('password-repeat'));
    this.usernameRegisterField = element(by.id('username'));

    this.etsyFinds = element(by.id('etsy_finds'));
    this.registerButtonRegisterPopUp = element(by.id('register_button'));

    this.goToRegister = function() {
        helper.waitElementToBeClickable(this.registerButtonOnMainPage)
        this.registerButtonOnMainPage.click()
    }

    this.goToLogin = function() {
        helper.waitUntilReady(this.signInButton)
        this.signInButton.click()
    }
}

module.exports = HomePage;
