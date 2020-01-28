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
    let count = dollarPage.getCountAfterPoint(dollar);
    expect(count).to.equal(4);
});

Scenario('Dollar menu element must be equal with dollar page element.', async (I) => {
    menu.navigate('Финансы');
    let dollarNBRB = await dollarPage.getDollar('нацбанк', '1 USD');
    logger.debug(dollarNBRB);
    dollarNBRB = '$' + dollarNBRB;
    expect(dollar.slice(1)).to.equal(dollarNBRB);
});

Scenario('Buy dollar value must be greater than sell dollar value.', async (I) => {
    let dollarBuy = await dollarPage.getDollar('купить', '1 USD');
    let dollarSell = await dollarPage.getDollar('продать', '1 USD');
    expect(parseFloat(dollarBuy)).to.be.gt(parseFloat(dollarSell));
});

Scenario('Checking the dollar archive for the date of December 1, 2019. The value of the dollar must be equal to 2.1086 value', async (I) => {
    let startDate = new Date('December 1, 2019');
    let endDate = new Date();
    await I.setArchiveDollarDate(startDate, endDate);
    let dollarNBRBArchive = await dollarArchivePage.getDollar('Курс НБРБ', '01.12.2019');
    expect(parseFloat(dollarNBRBArchive)).to.equal(2.1086);
});