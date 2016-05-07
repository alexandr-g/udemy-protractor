describe('Cart page :', function() {

    beforeEach(function() {
        browser.get(browser.params.url);
    });

    afterEach(function() {
        browser.manage().deleteAllCookies();
    });

    it('should navigate to the cart and verify that it is empty', function() {
        var cartIcon = element(by.css('[title="Cart"]'));
        var errorMessageEmptyCart = element(by.xpath(".//*[@id='newempty']/div/h2"));
    
        cartIcon.click();
        expect(errorMessageEmptyCart.getText()).toBe('Your cart is empty.');
    });

});
