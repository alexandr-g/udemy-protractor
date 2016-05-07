var helper = require('../../helper');

describe('Search :', function() {

    beforeEach(function() {
        browser.get(browser.params.url);
        browser.manage().window().maximize();
    });

    afterEach(function() {
        browser.manage().deleteAllCookies();
    });

    it('should for a vinyl item', function() {
        var searchField = element(by.id('search-query'));
        var searchButton = element(by.linkText('Search'));
        var searchItem = element(by.xpath(".//*[@id='content']/div/div/div[2]/div/div[3]/div[1]/div[3]/div[1]"));

        searchField.sendKeys('vinyl');
        helper.waitUntilReady(searchButton);
        searchButton.click();
        helper.waitUntilReady(searchItem);
        searchItem.click();
    });

});
