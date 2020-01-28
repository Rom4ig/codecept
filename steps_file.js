// in this file you can append custom step methods to 'I' object
const dollarPage = require('./Pages/dollarPage');
const dollarArchivePage = require('./Pages/dollarArchivePage');
const startPage = require('./Pages/startPage');
const menu = require('./Pages/menuClass');
const productsPage = require('./Pages/productsPage');
const catalogPage = require('./Pages/catalogPage');
const restorePage = require('./Pages/restorePage');
const weatherPage = require('./Pages/weatherPage');

module.exports = function () {
    return actor({

        setArchiveDollarDate: async function (startDate, endDate) {
            await dollarPage.clickElement(await dollarPage.elementByValueAndCurrency('нацбанк', '1 USD'));
            await dollarArchivePage.setDate(startDate, endDate);
        },

        enterRandomTextToField: async function (field, length) {
            let text = await startPage.getRandomText(length);
            startPage.enterTextToElement(field, text);
        },

        successLogin: async function () {
            startPage.enterTextToElement(startPage.LoginField, 'romses2000@mail.ru');
            startPage.enterTextToElement(startPage.PasswordField, 'qwerty228');
            startPage.pressKey('Enter');
            // menu.clickElement(menu.LoginButton);
            // startPage.clickElement(startPage.ExitButton);
        },

        failLogin: async function () {
            await this.enterRandomTextToField(startPage.LoginField, 5);
            await this.enterRandomTextToField(startPage.PasswordField, 5);
            startPage.pressKey('Enter');
            menu.clickElement(menu.LoginButton);
        },

        arrayOfSortedProducts: async function (category, sort) {
            catalogPage.clickByCategory(category);
            productsPage.clickElement(productsPage.CloseElem); //Возможно не нужно, добавил из-за редкого падения в этом месте
            productsPage.clickElement(sort);
            return await productsPage.getPrice();
        },

        ProductsByTwoManufacturer: async function(manufacturer1, manufacturer2){
            productsPage.clickElement(productsPage.AllManufacturer);
            productsPage.setManufacturer(manufacturer1);
            productsPage.setManufacturer(manufacturer2);
            productsPage.clickElement(productsPage.SubmitButton);
            let laptopsArray = await productsPage.getElementText(productsPage.LaptopsArray);
            laptopsArray.splice(0, 1); //1-ый реклама
            return laptopsArray;
        },

        enterEmailToRestore: async function (mail){
            restorePage.enterTextToElement(restorePage.RestoreField, mail);
            restorePage.clickElement(restorePage.CheckButton);
        },

        changeWeather: async function(){
            weatherPage.clickElement(weatherPage.TownElement);
            let town = 'Лепель';
            weatherPage.selectTown(town);
            weatherPage.findElementByText('Лепеле');
        }
    });
};
