const expect = require('chai').expect;
const productsPage = require('../Pages/productsPage');
const catalogPage = require('../Pages/catalogPage');
const logger = require('../logger').logger;
const menu = require('../Pages/menuClass');
const startPage = require('../Pages/startPage');
const checkSortArray = require('../checks');
Feature('Products test');

BeforeSuite(() => {
    logger.info('Start products test');
});

AfterSuite(() => {
    logger.info('End products test');
});


Scenario('The price of the previous is less than or equal to the price of the subsequent.', async (I) => {
    menu.openPage('/');
    menu.navigate('Каталог цен');
    let priceArray = await I.arrayOfSortedProducts('Ноутбуки', 'Сначала дешевые');
    logger.debug(priceArray);
    await checkSortArray(priceArray);
});

Scenario('The words "ASUS" and "DELL" are present in all search results.', async (I) => {
    let check = await I.checkWordInAllProductsByTwoManufacturer('ASUS', 'DELL');
    expect(check).to.be.true;
});

