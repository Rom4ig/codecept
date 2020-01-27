const expect = require('chai').expect;
const startPage = require('../Pages/startPage')
const workPage = require('../Pages/workPage');
const logger = require('../logger').logger;
const menu = require('../Pages/menuClass');

Feature('Job test');


Scenario('Page title should be "Работа в Минске, поиск персонала и публикация вакансий - jobs.tut.by"', async (I) => {
    startPage.openPage('/');
    menu.navigate('Работа');
    let  title = 'Работа в Минске, поиск персонала и публикация вакансий - jobs.tut.by';
    let currentTitle =  await I.grabTitle();
    expect(currentTitle).to.equal(title);
});

Scenario('The word "itechart" is present in all search results.', async (I) => {
    workPage.enterTextToElement(workPage.SearchField, 'iTechArt');
    workPage.pressKey('Enter');
    let array = await workPage.getElementText(workPage.WorkElements);
    for (let i = 1; i < array.length; i++) {
        expect(array[i].toLowerCase()).to.contains('itechart');
    }
});

