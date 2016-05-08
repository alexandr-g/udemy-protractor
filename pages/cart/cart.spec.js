var CartPage = require('./cart.po.js');
var CommonElements = require('../common/common.po.js');

describe('Cart page :', function() {

    var commonElements = new CommonElements();
    var cartPage = new CartPage();

    beforeEach(function() {
        browser.get(browser.params.url);
    });

    afterEach(function() {
        browser.manage().deleteAllCookies();
    });

    it('should navigate to the cart and verify that it is empty', function() {
        commonElements.cartIcon.click();
        expect(cartPage.errorMessageEmptyCart.getText()).toBe(cartPage.emptyCartNotificationText);
    });

});
