const Page = require('./page');

class ProductsPage extends Page {
    PriceBlock = '.prices';
    AllManufacturer = 'Все производители';
    SubmitButton = 'Подобрать';
    LaptopsArray = '.head';
    CloseElem = '.convert_link';

    async getPrice() {
        let arrayBase = (await this.getElementText(this.PriceBlock));
        let array = [];
        let regex = /([0-9]+,[0-9]+) р./;
        arrayBase.splice(0, 1); //1-ый реклама
        this.logger.trace(`type - ${typeof (arrayBase)}, value - ${arrayBase}`);
        for (let item of arrayBase) {
            item = item.match(regex)[1];
            array.push(item);
        }
        return array;
    }

    setManufacturer(name) {
        this.clickElement(`//label[text()[contains(.,'${name}')]]`);
    }
}

module.exports = new ProductsPage();