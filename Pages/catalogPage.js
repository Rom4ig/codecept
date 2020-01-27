const Page = require('./page');

class CatalogPage extends Page {

     clickByCategory(category) {
        this.clickElement(`//div[@class="category-metro-item"]/div[contains(text(), "${category}")]/../a`)
    }
}

module.exports = new CatalogPage();