const logger = require('../logger').logger;
const {checkSortArray, checkWordInAllProducts} = require('../checks');
const menu = require('../Pages/menuClass');

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
    await checkSortArray(priceArray);
});

Scenario('The words "ASUS" and "DELL" are present in all search results.', async (I) => {
    let manufacturers = [];
    manufacturers.push('ASUS');
    manufacturers.push('DELL');
    let laptopsArray = await I.ProductsByManufacturers(manufacturers);
    await checkWordInAllProducts(laptopsArray,'ASUS', 'DELL')
});

