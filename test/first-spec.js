const expect = require('chai').expect;
const axios = require('axios');

Feature('UI and API test');
Scenario('UI test tut.by. Success sign in', (I) => {
    I.amOnPage('/');
    I.click('.enter');
    I.fillField('login', 'romses2000@mail.ru');
    I.fillField('password', 'qwerty228');
    I.pressKey('Enter');
    I.see('Роман Грунковский');
});

Scenario('Api test https://reqres.in/. Get API/USERS by helpers codeceptJS', async (I) => {
    const res = await I.sendGetRequest('api/users');
    console.log(res.data);
    expect(res.data.data[0].email).to.eql('george.bluth@reqres.in');
});
Scenario('Api test https://reqres.in/. Get API/USERS by axios', () => {
// Make a request for a users
    axios.get('https://reqres.in/api/users')
        .then(function (res) {
            // handle success
            console.log(res.data);
            expect(res.data.data[1].email).to.eql('janet.weaver@reqres.in')
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
});