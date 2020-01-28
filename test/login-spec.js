const startPage = require('../Pages/startPage');
const menu = require('../Pages/menuClass');
const logger = require('../logger').logger;
const {checkEnterButton } = require('../checks');

Feature('Tut.by login');
Before((I) => {
    I.amOnPage('/');
    I.click(menu.LoginButton);
});

BeforeSuite(() => {
    logger.info('Start login test');
});

AfterSuite(() => {
    logger.info('End login test');
});

Scenario('When entering only login, the login button should be disabled.', async (I) => {
    await I.enterRandomTextToField(startPage.LoginField, 5);
    await checkEnterButton();
});

Scenario('When entering only password, the login button should be disabled.', async (I) => {
    await I.enterRandomTextToField(startPage.PasswordField, 5);
    await checkEnterButton();
});

Scenario('When set invalid credentials, should be error.', async (I) => {
    await I.failLogin();
    I.see('Неверное имя пользователя или пароль');
});

Scenario('When set valid credentials, should be success sign in.', async (I) => {
    await I.successLogin();
    I.see('Роман Грунковский');
});