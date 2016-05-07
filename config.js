exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['*.spec.js', 'spec.js'],
  params: {
      url: 'https://www.etsy.com/'
  },
  onPrepare: function() {
      browser.ignoreSynchronization = true;
  }
}
