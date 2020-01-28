const expect = require('chai').expect;
const startPage = require('../Pages/startPage');
const menu = require('../Pages/menuClass');
const logger = require('../logger').logger;

Feature('Tut.by login');
Before((I) => {
    startPage.openPage('/');
    menu.clickElement(menu.LoginButton);
});

BeforeSuite(() => {
    logger.info('Start login test');
});

AfterSuite(() => {
    logger.info('End login test');
});

Scenario('When entering only login, the login button should be disabled.', async (I) => {
    await I.enterRandomTextToField(startPage.LoginField, 5);
    let button = await I.checkEnterButton();
    expect(button).to.be.true;
});

Scenario('When entering only password, the login button should be disabled.', async (I) => {
    await I.enterRandomTextToField(startPage.PasswordField, 5);
    let button = await I.checkEnterButton();
    expect(button).to.be.true;
});

Scenario('When set invalid credentials, should be error.', async (I) => {
    await I.failLogin();
    startPage.findElementByText('Неверное имя пользователя или пароль');
});

Scenario('When set valid credentials, should be success sign in.', async (I) => {
    await I.successLogin();
    startPage.findElementByText('Роман Грунковский');
});