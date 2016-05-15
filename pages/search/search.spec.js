var helper = require('../../helper'),
    SearchPage = require('./search.po.js');

describe('Search :', function() {

    var searchPage = new SearchPage();

    beforeEach(function() {
        browser.get(browser.params.url);
        browser.manage().window().maximize();
    });

    afterEach(function() {
        browser.manage().deleteAllCookies();
    });

    it('should search for a iPhone 6 case', function(done) {
        searchPage.searchField.sendKeys('Wolf Fox Feathers Black Mandala Henna Phone Case iPhone 6')
        .then(function() {
            return helper.waitUntilReady(searchPage.searchButton);
        })
        .then(function() {
            return searchPage.searchButton.click();
        })
        .then(function() {
            return helper.waitUntilReady(searchPage.searchItem);
        })
        .then(function() {
            return searchPage.searchItem.click();
        })
        .then(done);
    });
});
