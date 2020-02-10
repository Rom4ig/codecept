const logger = require('../logger').logger;
const {checkWordInAllProducts} = require('../checks');
const menu = require('../Pages/menuClass');
require('../custom_expect');
const expect = require('chai').expect;
Feature('Products test');

BeforeSuite(() => {
    logger.info('Start products test');
});

AfterSuite(() => {
    logger.info('End products test');
});


Scenario('The price of the previous is less than or equal to the price of the subsequent.', async (I) => {
    I.amOnPage('/');
    I.click(menu.Catalog);
    let priceArray = await I.arrayOfSortedProducts('Ноутбуки', 'Сначала дешевые');
    logger.debug(priceArray);
    expect(priceArray).to.be.sortedArray();
});

Scenario('The words "ASUS" and "DELL" are present in all search results.', async (I) => {
    let manufacturers = [];
    manufacturers.push('ASUS');
    manufacturers.push('DELL');
    let laptopsArray = await I.ProductsByManufacturers(manufacturers);
    expect(laptopsArray).to.be.includesWords('ASUS', 'DELL');
});

