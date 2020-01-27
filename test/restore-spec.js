const expect = require('chai').expect;
const restorePage = require('../Pages/restorePage');
const startPage = require('../Pages/startPage')
const logger = require('../logger').logger;
const menu = require('../Pages/menuClass');

Feature('Restore test');

BeforeSuite(() => {
    logger.info('Start restore test');
});

AfterSuite(() => {
    logger.info('End restore test');
});


Scenario('After entering non-existent mail there should be an error.', async (I) => {
    startPage.openPage('/');
    menu.clickElement(menu.LoginButton);
    startPage.clickElement(startPage.ForgotButton);
    restorePage.enterTextToElement(restorePage.RestoreField, 'iTechArtQA@tut.by');
    restorePage.clickElement(restorePage.CheckButton);
    restorePage.findElementByText('Такой почты не существует');
});

Scenario('After entering invalid mail there should be an error.', async (I) => {
    restorePage.enterTextToElement(restorePage.RestoreField, 'romses2000@mail.ru');
    restorePage.clickElement(restorePage.CheckButton);
    restorePage.clickElement(restorePage.EmailRecoveryButton);
    let mail = await restorePage.getRandomText(5);
    restorePage.enterTextToElement(restorePage.ReservEmailField, mail);
    restorePage.clickElement(restorePage.EmailReservButton);
    restorePage.findElementByText('Минимум 6 символов для поля Резервный адрес эл. почты');
});

Scenario('After entering non-existent to restore field mail there should be an error.', async (I) => {
    restorePage.enterTextToElement(restorePage.ReservEmailField, 'qwer@mail.ru');
    restorePage.clickElement(restorePage.EmailReservButton);
    restorePage.findElementByText('Неверный адрес почты');
});
