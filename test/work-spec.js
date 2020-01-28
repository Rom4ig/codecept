const expect = require('chai').expect;
const startPage = require('../Pages/startPage');
const workPage = require('../Pages/workPage');
const logger = require('../logger').logger;
const menu = require('../Pages/menuClass');

Feature('Job test');

BeforeSuite(() => {
    logger.info('Start job test');
});

AfterSuite(() => {
    logger.info('End job test');
});

Scenario('Page title should be "Работа в Минске, поиск персонала и публикация вакансий - jobs.tut.by"', async (I) => {
    startPage.openPage('/');
    menu.navigate('Работа');
    let title = 'Работа в Минске, поиск персонала и публикация вакансий - jobs.tut.by';
    let currentTitle = await I.grabTitle();
    expect(currentTitle).to.equal(title);
});

Scenario('The word "itechart" is present in all search results.', async (I) => {
    workPage.enterTextToElement(workPage.SearchField, 'iTechArt');
    workPage.pressKey('Enter');
    let array = await workPage.getElementText(workPage.WorkElements);
    array.forEach(element =>
        expect(element.toLowerCase()).to.contains('itechart'));
});

