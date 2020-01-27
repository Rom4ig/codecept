const Page = require('./page');

class CatalogPage extends Page {
    CategoryArray = element.all(by.css('[class="category-metro-wl"]'));
    CategoryArrayTitle = element.all(by.css('[class="category-metro-title"]'));
    
    async clickByCategory(linkText) {
        let array = (await this.getElementText(this.CategoryArrayTitle));
        this.logger.trace(`type - ${typeof (array)}, value - ${array}`);
        let number = array.indexOf(linkText);
        this.logger.trace(number);
        await this.clickElement((this.CategoryArray).get(number));
        this.logger.info(`Clicked by category ${linkText}`)
    }
}

module.exports = new CatalogPage();