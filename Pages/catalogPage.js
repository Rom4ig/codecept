const I = actor();
class CatalogPage {

     clickByCategory(category) {
        I.click(`//div[@class="category-metro-item"]/div[contains(text(), "${category}")]/../a`)
    }
}

module.exports = new CatalogPage();