const Page = require('./page');

class WorkPage extends Page {
    SearchField = element(by.css('[data-qa="search-input"]'));
    SubmitButton = element(by.css('[class="supernova-search-submit-text"]'));
    WorkElements = element.all(by.xpath('//div[@data-qa="vacancy-serp__vacancy" or @data-qa="vacancy-serp__vacancy vacancy-serp__vacancy_premium"]'));
}

module.exports = new WorkPage();
