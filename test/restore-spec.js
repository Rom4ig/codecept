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
    I.amOnPage('/');
    I.click(menu.LoginButton);
    I.click(startPage.ForgotButton);
    I.enterEmailToRestore('iTechArtQA@tut.by');
    I.see('Такой почты не существует');
});

Scenario('After entering invalid mail there should be an error.', async (I) => {
    I.enterEmailToRestore('romses2000@mail.ru');
    I.click(restorePage.EmailRecoveryButton);
    await I.enterRandomTextToField(restorePage.ReservEmailField, 5);
    I.click(restorePage.EmailReservButton);
    I.see('Минимум 6 символов для поля Резервный адрес эл. почты');
});

Scenario('After entering non-existent to restore field mail there should be an error.', async (I) => {
    I.fillField(restorePage.ReservEmailField, 'qwer@mail.ru');
    I.click(restorePage.EmailReservButton);
    I.see('Неверный адрес почты');
});
