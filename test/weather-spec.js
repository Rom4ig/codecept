const expect = require('chai').expect;
const startPage = require('../Pages/startPage')
const weatherPage = require('../Pages/weatherPage');
const logger = require('../logger').logger;
const menu = require('../Pages/menuClass');

Feature('Weather test');

Scenario('Menu weather element must be equal with page weather element.', async (I) => {
    startPage.openPage('/');
    let weather = await menu.getElementText(menu.WeatherElement);
    let regex = /((\+[1-9]{1,2}|-[1-9]{1,2}|0)°)/;
    menu.clickElement(menu.WeatherElement);
    let weatherpage = await weatherPage.getElementText(weatherPage.WeatherPageElement);
    weatherpage = weatherpage.match(regex)[1];
    expect(weatherpage).to.equal(weather);
});

Scenario('Town after selecting on the weather page - "Лепеле"', async (I) => {
    weatherPage.clickElement(weatherPage.TownElement);
    let town = 'Лепель';
    weatherPage.selectTown(town);
    let currentTown = await weatherPage.getElementText(weatherPage.TownElement);
    expect(currentTown).to.equal('Лепеле');
});
