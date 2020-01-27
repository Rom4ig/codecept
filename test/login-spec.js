const expect = require('chai').expect;
const startPage = require('../Pages/startPage');
const menu = require('../Pages/menuClass');

Feature('Tut.by login');
Before((I) => {
    startPage.openPage('/');
    menu.clickElement(menu.LoginButton);
});

Scenario('When entering only login, the login button should be disabled.', async (I) => {
    let text = await startPage.getRandomText(5);
    startPage.enterTextToElement(startPage.LoginField, text);
    let hint = await startPage.getAttribute(startPage.EnterButton, 'className');
    let disabledGET = hint.toString();
    let disabled = 'button auth__enter disabled';
    expect(disabledGET).to.equal(disabled);
});

Scenario('When entering only password, the login button should be disabled.', async (I) => {
    startPage.clearField(startPage.LoginField);
    let text = await startPage.getRandomText(5);
    await startPage.enterTextToElement(startPage.PasswordField, text);
    let hint = await startPage.getAttribute(startPage.EnterButton, 'className');
    let disabledGET = hint.toString();
    let disabled = 'button auth__enter disabled';
    expect(disabledGET).to.equal(disabled);
});

Scenario('When set invalid credentials, should be error.', async (I) => {
    let text = await startPage.getRandomText(5);
    startPage.enterTextToElement(startPage.LoginField, text);
    text = await startPage.getRandomText(5);
    startPage.enterTextToElement(startPage.PasswordField, text);
    startPage.pressKey('Enter');
    menu.clickElement(menu.LoginButton);

    startPage.findElementByText('Неверное имя пользователя или пароль');
});

Scenario('When set valid credentials, should be success sign in.', async (I) => {
    startPage.enterTextToElement(startPage.LoginField, 'romses2000@mail.ru');
    startPage.enterTextToElement(startPage.PasswordField, 'qwerty228');
    startPage.pressKey('Enter');
    startPage.findElementByText('Роман Грунковский');
    menu.clickElement(menu.LoginButton);
    startPage.clickElement(startPage.ExitButton);
});