var helper = require('../../helper');

var SearchPage = function() {
    this.searchField = element(by.id('search-query'));

    this.searchButton = element(by.xpath(".//*[@id='search-bar']/div/div[2]/button"));
    this.searchItem = element(by.xpath(".//*[@id='content']/div/div/div[2]/div/div[2]/div/div[1]/div[1]"));

    this.addToCartButton = element(by.css('.btn-transaction'));
    this.selectDeviceErorrText = element(by.css('.error-515'));
}

module.exports = SearchPage;
