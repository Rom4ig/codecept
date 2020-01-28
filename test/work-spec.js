const expect = require('chai').expect;
const workPage = require('../Pages/workPage');
const logger = require('../logger').logger;

Feature('Job test');

BeforeSuite(() => {
    logger.info('Start job test');
});

AfterSuite(() => {
    logger.info('End job test');
});

Scenario('Page title should be "Работа в Минске, поиск персонала и публикация вакансий - jobs.tut.by"', async (I) => {
    I.amOnPage('/');
    I.click('Работа');
    let title = 'Работа в Минске, поиск персонала и публикация вакансий - jobs.tut.by';
    let currentTitle = await I.grabTitle();
    expect(currentTitle).to.equal(title);
});

Scenario('The word "itechart" is present in all search results.', async (I) => {
    I.fillField(workPage.SearchField, 'iTechArt');
    I.pressKey('Enter');
    let array = await I.grabTextFrom(workPage.WorkElements);
    array.forEach(element =>
        expect(element.toLowerCase()).to.contains('itechart'));
});

