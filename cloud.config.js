require('dotenv').config({
    silent: true
});

module.exports.config = {
    seleniumAddress: 'http://hub.browserstack.com/wd/hub',
    framework: 'jasmine',
    specs: [
        './pages/**/*.spec.js',
    ],
    params: {
        url: 'https://www.etsy.com/',
        login: {
            user: process.env.ETSY_USER,
            password: process.env.ETSY_PASSWORD
        }
    },
    multiCapabilities: [
        {
            'browserName' : 'IE',
            'browser_version' : '9.0',
            'os' : 'Windows',
            'os_version' : '7',
            'browserstack.user': process.env.BROWSERSTACK_USER,
            'browserstack.key': process.env.BROWSERSTACK_KEY
        },
        {
            'browserName' : 'Firefox',
            'browser_version' : '44.0',
            'os' : 'Windows',
            'os_version' : '8',
            'resolution' : '1280x800',
            'browserstack.user': process.env.BROWSERSTACK_USER,
            'browserstack.key': process.env.BROWSERSTACK_KEY
        },
        {
            'browserName' : 'Safari',
            'browser_version' : '8.0',
            'os' : 'OS X',
            'os_version' : 'Yosemite',
            'resolution' : '1280x960',
            'browserstack.user': process.env.BROWSERSTACK_USER,
            'browserstack.key': process.env.BROWSERSTACK_KEY
        }
    ],
    suites: {
        cart: 'pages/cart/**/*.spec.js',
        home: 'pages/home/**/*.spec.js',
        search: 'pages/search/**/*.spec.js'
    },
    onPrepare: function () {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
    },
    jasmineNodeOpts: {
        showColors: true
    }
};
