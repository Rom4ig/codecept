const Page = require('./page');
const regex = /([0-9]+,[0-9]+) р./;

class ProductsPage extends Page {
    
    SelectSort = element(by.css('[class="sort-select"]'));
    TagElements = element.all(by.tagName('option'));
    PriceBlock = element.all(by.css('[class="prices"]'));
    AllManufacturer = element(by.linkText('Все производители'));
    SubmitButton = element(by.css('[id="filters_form"]'));
    LaptopsArray = element.all(by.css('[class="head"]'));

    async setSort(name) {
        this.logger.trace(`Set sort`);
        try {
            await this.clickElement(this.SelectSort);
            let array = (await this.getElementText(this.TagElements));
            this.logger.trace(`type - ${typeof (array)}, value - ${array}`);
            let number = array.indexOf(name);
            this.logger.trace(number);
            await this.clickElement((this.CategoryArray).get(number));
            this.logger.info(`Clicked by link ${name}`)
        }
        catch {
            await element(by.linkText(name)).click();
        }
    }

    async getPrice() {
        let arrayBase = (await this.getElementText(this.PriceBlock));
        let array = [];
        arrayBase.splice(0, 1); //1-ый реклама
        this.logger.trace(`type - ${typeof (arrayBase)}, value - ${arrayBase}`);
        for (let item of arrayBase) {
            item = item.match(regex)[1];
            array.push(item);
        }
        return array;
    }

    async setManufacturer(name) {
        await element(by.xpath(`//label[text()[contains(.,'${name}')]]`)).click();
    }
}

module.exports = new ProductsPage();