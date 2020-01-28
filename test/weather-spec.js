const expect = require('chai').expect;
const startPage = require('../Pages/startPage')
const weatherPage = require('../Pages/weatherPage');
const logger = require('../logger').logger;
const menu = require('../Pages/menuClass');
const {checkWeather} = require('../checks');
Feature('Weather test');

BeforeSuite(() => {
    logger.info('Start Weather test');
});

AfterSuite(() => {
    logger.info('End Weather test');
});

Scenario('Menu weather element must be equal with page weather element.', async (I) => {
    startPage.openPage('/');
    await checkWeather();
});
Scenario('Town after selecting on the weather page - "Лепеле"', async (I) => {
    await I.changeWeather();
    weatherPage.findElementByText('Лепеле');
});
