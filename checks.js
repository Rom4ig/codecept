const expect = require('chai').expect;
const startPage = require('./Pages/startPage');
const weatherPage = require('./Pages/weatherPage');
const dollarPage = require('./Pages/dollarPage');
const menu = require('./Pages/menuClass');
const I = actor();

module.exports = {
    checkSortArray: async function (array) {
        for (let i = 1; i < array.length; i++) {
            expect(parseFloat((array[i]).replace(',', '.'))).to.gte(parseFloat((array[i - 1]).replace(',', '.')));
        }
    },

    checkWordInAllProducts: async function (array, word1, word2) {
        let length = array.length;
        for (let item of array) {
            if (item.includes(word1) || item.includes(word2))
                length--;
        }
        expect(length).to.equal(0);
    },

    checkEnterButton: async function () {
        let hint = await I.grabAttributeFrom(startPage.EnterButton, 'className');
        let disabledGET = hint.toString();
        let disabled = 'button auth__enter disabled';
        expect(disabledGET).to.equal(disabled);
    },

    checkWeather: async function () {
        let weather = await I.grabTextFrom(menu.WeatherElement);
        weather = weather.replace('−', '-');
        let regex = /((\+[1-9]{1,2}|-[1-9]{1,2}|0)°)/;
        I.click(menu.WeatherElement);
        let weatherpage = await I.grabTextFrom(weatherPage.WeatherPageElement);
        weatherpage = weatherpage.match(regex)[1];
        expect(weatherpage).to.equal(weather);
    },

    checkCountOfCharsAfterPoint: async function (text, equals) {
        let count = text.split('.').pop().length;
        expect(count).to.equal(equals);
    },

    checkBuyGreaterThanSell: async function (currency) {
        let buy = await dollarPage.getDollar('купить', currency);
        let sell = await dollarPage.getDollar('продать', currency);
        expect(parseFloat(buy)).to.be.gt(parseFloat(sell));
    }
};