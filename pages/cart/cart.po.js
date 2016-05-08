var CartPage = function() {

    //xpath
    this.errorMessageEmptyCart = element(by.xpath(".//*[@id='newempty']/div/h2"));

    this.emptyCartNotificationText = 'Your cart is empty.';
}

module.exports = CartPage;
