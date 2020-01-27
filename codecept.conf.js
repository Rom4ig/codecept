const {setHeadlessWhen} = require('@codeceptjs/configure');
const argv = require('yargs').argv;
let brow = 'chrome';
if (argv.browser !== undefined) { //Check browser
    brow = argv.browser;
}
// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
    tests: 'test/*-spec.js',
    output: './output',
    helpers: {
        WebDriver: {
            url: 'https://www.tut.by/',
            browser: brow,
            restart: false,
            windowSize: "maximize"
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
        },
        allure: {
            enabled: true
        }
    }
};