const expect = require('chai').expect;
const productsPage = require('../Pages/productsPage');
const catalogPage = require('../Pages/catalogPage');
const logger = require('../logger').logger;
const menu = require('../Pages/menuClass');
const startPage = require('../Pages/startPage')

Feature('Products test');

BeforeSuite(() => {
    logger.info('Start products test');
});

AfterSuite(() => {
    logger.info('End products test');
});


Scenario('The price of the previous is less than or equal to the price of the subsequent.', async (I) => {
    startPage.openPage('/');
    menu.navigate('Каталог цен');
    catalogPage.clickByCategory('Ноутбуки');
    productsPage.clickElement(productsPage.CloseElem); //Возможно не нужно, добавил из-за редкого падения в этом месте
    productsPage.clickElement('Сначала дешевые');
    let priceArray = await productsPage.getPrice();
    logger.debug(priceArray);
    for (let i = 1; i < priceArray.length; i++) {
        expect(parseFloat((priceArray[i]).replace(',', '.'))).to.gte(parseFloat((priceArray[i - 1]).replace(',', '.')));
    }
});

Scenario('The words "ASUS" and "DELL" are present in all search results.', async (I) => {
    productsPage.clickElement(productsPage.AllManufacturer);
    productsPage.setManufacturer('ASUS');
    productsPage.setManufacturer('DELL');
    productsPage.clickElement(productsPage.SubmitButton);
    let laptopsArray = await productsPage.getElementText(productsPage.LaptopsArray);
    laptopsArray.splice(0, 1); //1-ый реклама
    let length = laptopsArray.length;
    for (let item of laptopsArray) {
        logger.debug(item);
        if (item.includes('ASUS') || item.includes('DELL'))
            length--;
    }
    expect(length).to.equal(0);
});

