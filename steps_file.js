// in this file you can append custom step methods to 'I' object
const dollarPage = require('./Pages/dollarPage');
const dollarArchivePage = require('./Pages/dollarArchivePage');
const startPage = require('./Pages/startPage');
const menu = require('./Pages/menuClass');
const productsPage = require('./Pages/productsPage');
const catalogPage = require('./Pages/catalogPage');
const restorePage = require('./Pages/restorePage');
const weatherPage = require('./Pages/weatherPage');
const getRandomText = require('./util').getRandomText;

module.exports = function () {
    return actor({

        setArchiveDollarDate: async function (startDate, endDate) {
            await this.click(await dollarPage.elementByValueAndCurrency('нацбанк', '1 USD'));
            await dollarArchivePage.setDate(startDate, endDate);
        },

        enterRandomTextToField: async function (field, length) {
            let text = await getRandomText(length);
            this.fillField(field, text);
        },

        successLogin: async function () {
            this.fillField(startPage.LoginField, 'romses2000@mail.ru');
            this.fillField(startPage.PasswordField, 'qwerty228');
            this.pressKey('Enter');
        },

        failLogin: async function () {
            await this.enterRandomTextToField(startPage.LoginField, 5);
            await this.enterRandomTextToField(startPage.PasswordField, 5);
            this.pressKey('Enter');
            this.click(menu.LoginButton);
        },

        arrayOfSortedProducts: async function (category, sort) {
            catalogPage.clickByCategory(category);
            this.click(productsPage.CloseElem); //Возможно не нужно, добавил из-за редкого падения в этом месте
            this.click(sort);
            this.click(productsPage.ListIcon, productsPage.Switcher); //Некоторые категории товаров отображаются в другом формате, из-за чего не работают другие локаторы
            return await productsPage.getPrices();
        },

        ProductsByManufacturers: async function (manufacturers) {
            this.click(productsPage.AllManufacturer);
            manufacturers.forEach((manufacturer) =>
                productsPage.setManufacturer(manufacturer));
            this.click(productsPage.SubmitButton);
            let laptopsArray = await this.grabTextFrom(productsPage.LaptopsArray);
            laptopsArray.splice(0, 1); //1-ый реклама
            return laptopsArray;
        },

        enterEmailToRestore: async function (mail) {
            this.fillField(restorePage.RestoreField, mail);
            this.click(restorePage.CheckButton);
        },

        changeWeather: async function (town) {
            this.click(weatherPage.TownElement);
            this.click(town);
        }
    });
};
