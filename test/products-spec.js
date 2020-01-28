const logger = require('../logger').logger;
const {checkSortArray, checkWordInAllProducts} = require('../checks');

Feature('Products test');

BeforeSuite(() => {
    logger.info('Start products test');
});

AfterSuite(() => {
    logger.info('End products test');
});


Scenario('The price of the previous is less than or equal to the price of the subsequent.', async (I) => {
    I.amOnPage('/');
    I.click('Каталог цен');
    let priceArray = await I.arrayOfSortedProducts('Ноутбуки', 'Сначала дешевые');
    logger.debug(priceArray);
    await checkSortArray(priceArray);
});

Scenario('The words "ASUS" and "DELL" are present in all search results.', async (I) => {
    let laptopsArray = await I.ProductsByTwoManufacturer('ASUS', 'DELL');
    await checkWordInAllProducts(laptopsArray,'ASUS', 'DELL')
});

