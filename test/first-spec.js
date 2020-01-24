const expect = require('chai').expect;

Feature('UI and API test');
Scenario('UI test tut.by. Success sign in', (I) => {
    I.amOnPage('/');
    I.click('.enter');
    I.fillField('login', 'romses2000@mail.ru');
    I.fillField('password', 'qwerty228');
    I.pressKey('Enter');
    I.see('Роман Грунковский');
});