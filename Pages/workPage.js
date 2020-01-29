class WorkPage {
    SearchField = '[data-qa^="search-input"]';
    WorkElements = '//div[@data-qa="vacancy-serp__vacancy" or @data-qa="vacancy-serp__vacancy vacancy-serp__vacancy_premium"]';
}

module.exports = new WorkPage();
