End-to-End Testing with Protractor JS course files
==========

[Protractor](http://angular.github.io/protractor) is an end-to-end test framework for [AngularJS](http://angularjs.org/) applications. Protractor is a [Node.js](http://nodejs.org/) program built on top of [WebDriverJS](https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs). Protractor runs tests against your application running in a real browser, interacting with it as a user would.

Setup
-----
Install [Java from here](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
Install [Node.js](http://nodejs.org/)

Clone repo:
```
git clone https://gitlab.com/centner/udemy-protractor.git
```

You can use npm to install Protractor globally with:
```
npm install -g protractor
```

...or after cloning inside project folder execute: (that will install all dependencies from package.json)
```
npm i
```

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:
```
webdriver-manager update
webdriver-manager start
```
Running Tests
-------------
Tests need to be run from the project directory inside the udemy-protractor:
```
cd udemy-protractor
```
Run Selenium in one tab via:
```
webdriver-manager start
```

Once the Selenium server is running, run this command in another tab:
```
protractor config.js
```

It is possible to run tests by test suites/groups separately:

```
protractor config.js --suite home
protractor config.js --suite cart
```

© 2016 Berlin Alexander Grischuk ALL RIGHTS RESERVED
