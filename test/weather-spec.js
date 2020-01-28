const logger = require('../logger').logger;
const {checkWeather} = require('../checks');
Feature('Weather test');

BeforeSuite(() => {
    logger.info('Start Weather test');
});

AfterSuite(() => {
    logger.info('End Weather test');
});

Scenario('Menu weather element must be equal with page weather element.', async (I) => {
    I.amOnPage('/');
    await checkWeather();
});
Scenario('Town after selecting on the weather page - "Лепеле"', async (I) => {
    await I.changeWeather();
    I.see('Лепеле');
});
