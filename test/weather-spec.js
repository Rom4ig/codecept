const logger = require('../logger').logger;
const expect = require('chai').expect;
const {getWeather} = require('../util');
const weatherPage = require('../Pages/weatherPage');
const menu = require('../Pages/menuClass');
Feature('Weather test');

BeforeSuite(() => {
    logger.info('Start Weather test');
});

AfterSuite(() => {
    logger.info('End Weather test');
});

Scenario('Menu weather element must be equal with page weather element.', async (I) => {
    I.amOnPage('/');
    let weatherpage = await getWeather(menu.WeatherElement);
    I.click(menu.WeatherElement);
    let weather = await getWeather(weatherPage.WeatherPageElement);
    expect(weatherpage).to.equal(weather);
});

Scenario('Town after selecting on the weather page - "Лепеле"', async (I) => {
    await I.changeWeather('Лепель');
    I.see('Лепеле');
});
