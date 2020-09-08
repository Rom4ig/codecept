const dollarPage = require('./Pages/dollarPage');
const startPage = require('./Pages/startPage');
const I = actor();
const logger = require('./logger').logger;
const chai = require('chai');
const Assertion = chai.Assertion;


Assertion.addMethod('sortedArray', function sortedArray() {
    let obj = this._obj;

    for (let i = 1; i < obj.length; i++) {
        new Assertion(parseFloat((obj[i]).replace(',', '.'))).to.gte(parseFloat((obj[i - 1]).replace(',', '.')));
    }
});

Assertion.addMethod('includesWords', function includesWords(words) {
    let obj = this._obj;
    let length = obj.length;
    for (let item of obj) {
        for (let word of words) {
            if (item.includes(word))
                length--;
        }
    }
    new Assertion(length).to.gte(0);
});

Assertion.addMethod('disabled', async function disabled() {
    let obj = this._obj;
    let hint = await I.grabAttributeFrom(obj, 'className');
    let disabledGET = hint.toString();
    new Assertion(disabledGET).to.contains('disabled');
});

Assertion.addMethod('symbolsAfterPoint', async function symbolsAfterPoint(equals) {
    let obj = this._obj;
    let count = obj.split('.').pop().length;
    new Assertion(count).to.equal(equals);
});
