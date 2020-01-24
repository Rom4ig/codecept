const expect = require('chai').expect;

Feature('UI test');
Scenario('test something', (I) => {
    I.amOnPage('/');
    I.click('.enter');
    I.fillField('login', 'romses2000@mail.ru');
    I.fillField('password', 'qwerty228');
    I.pressKey('Enter');
    I.see('Роман Грунковский');
});

//Feature('API test');
Scenario('https://reqres.in/', async(I) => {
    const res = await I.sendGetRequest('api/users');
    console.log(res.data);
    expect(res.data.data[0].email).to.eql('george.bluth@reqres.in');
});