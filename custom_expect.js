const dollarPage = require('./Pages/dollarPage');
const startPage = require('./Pages/startPage');
const I = actor();
const logger = require('./logger').logger;
const chai = require('chai');
const Assertion = chai.Assertion;


Assertion.addMethod('sortedArray', function sortedArray ()  {
    let obj = this._obj;

    for (let i = 1; i < obj.length; i++) {
        new Assertion(parseFloat((obj[i]).replace(',', '.'))).to.gte(parseFloat((obj[i - 1]).replace(',', '.')));
    }
});

Assertion.addMethod('includesWords', function includesWords (word1, word2) {
    let obj = this._obj;
    let length = obj.length;
    for (let item of obj) {
        if (item.includes(word1) || item.includes(word2))
            length--;
    }
    new Assertion(length).to.equal(0);
});

Assertion.addMethod('buyGreaterThanSell', async function buyGreaterThanSell () {
    let obj = this._obj;
    let buy = await dollarPage.getDollar('купить', obj);
    let sell = await dollarPage.getDollar('продать', obj);
    new Assertion(parseFloat(buy)).to.gt(parseFloat(sell));
});

Assertion.addMethod('disabled', async function disabled () {
    let obj = this._obj;
    let hint = await I.grabAttributeFrom(obj, 'className');
    let disabledGET = hint.toString();
    new Assertion(disabledGET).to.contains('disabled');
});

Assertion.addMethod('symbolsAfterPoint', async function symbolsAfterPoint (equals) {
    let obj = this._obj;
    let count = obj.split('.').pop().length;
    new Assertion(count).to.equal(equals);
});
