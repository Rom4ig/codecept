Feature('');

Scenario('test something', (I) => {
    I.amOnPage('/');
    I.click('.enter');
    I.fillField('login', 'romses2000@mail.ru');
    I.fillField('password', 'qwerty228');
    I.click('//input[@value="Войти"]');
    I.see('Роман Грунковский');
});
