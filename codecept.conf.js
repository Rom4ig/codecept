const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'test/*-spec.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.tut.by/',
      browser: 'chrome'
    },
    REST: {
      endpoint: 'https://reqres.in/',
      onRequest: (request) => {
        request.headers.auth = '123';
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codecept',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    screenshotOnFail: {
      enabled: true
    }
  }
};