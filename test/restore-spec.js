
const restorePage = require('../Pages/restorePage');
const startPage = require('../Pages/startPage');
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
    I.enterEmailToRestore('iTechArtQA@tut.by');
    restorePage.findElementByText('Такой почты не существует');
});

Scenario('After entering invalid mail there should be an error.', async (I) => {
    I.enterEmailToRestore('romses2000@mail.ru');
    restorePage.clickElement(restorePage.EmailRecoveryButton);
    await I.enterRandomTextToField(restorePage.ReservEmailField, 5);
    restorePage.clickElement(restorePage.EmailReservButton);
    restorePage.findElementByText('Минимум 6 символов для поля Резервный адрес эл. почты');
});

Scenario('After entering non-existent to restore field mail there should be an error.', async (I) => {
    restorePage.enterTextToElement(restorePage.ReservEmailField, 'qwer@mail.ru');
    restorePage.clickElement(restorePage.EmailReservButton);
    restorePage.findElementByText('Неверный адрес почты');
});
