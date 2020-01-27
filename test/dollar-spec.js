const expect = require('chai').expect;
const dollarPage = require('../Pages/dollarPage');
const dollarArchivePage = require('../Pages/dollarArchivePage');
const logger = require('../logger').logger;
const menu = require('../Pages/menuClass');

Feature('Dollar test');
let dollar;

BeforeSuite(() => {
    logger.info('Start dollar test');
});

AfterSuite(() => {
    logger.info('End dollar test');
});

Scenario('The number of chars after the point should be 4.', async (I) => {
    menu.openPage('/');
    dollar = await menu.getElementText(menu.DollarElement);
    logger.debug(dollar);
    expect(dollar).to.contains('$');
    let count = dollar.split('.').pop().length;
    expect(count).to.equal(4);
});

Scenario('Dollar menu element must be equal with dollar page element.', async (I) => {
    menu.navigate('Финансы');
    let dollarNBRB = await dollarPage.getElementText(await dollarPage.elementByValueAndCurrency('нацбанк', '1 USD'));
    logger.debug(dollarNBRB);
    dollarNBRB = '$' + dollarNBRB;
    expect(dollar.slice(1)).to.equal(dollarNBRB);
});

Scenario('Buy dollar value must be greater than sell dollar value.', async (I) => {
    let dollarBuy = await dollarPage.getElementText(await dollarPage.elementByValueAndCurrency('купить', '1 USD'));
    let dollarSell = await dollarPage.getElementText(await dollarPage.elementByValueAndCurrency('продать', '1 USD'));
    expect(parseFloat(dollarBuy)).to.be.gt(parseFloat(dollarSell));
});

Scenario('Checking the dollar archive for the date of December 1, 2019. The value of the dollar must be equal to 2.1086 value', async (I) => {
    await dollarPage.clickElement(await dollarPage.elementByValueAndCurrency('нацбанк', '1 USD'));
    let startDate = new Date('December 1, 2019');
    let endDate = new Date();
    await dollarArchivePage.setDate(startDate, endDate);
    let dollarNBRBArchive = await dollarArchivePage.getElementText(await dollarArchivePage.elementByBankAndDate('Курс НБРБ', '01.12.2019'));
    expect(parseFloat(dollarNBRBArchive)).to.equal(2.1086);
});