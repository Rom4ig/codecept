const Page = require('./page');

class DollarPage extends Page {

    async elementByValueAndCurrency(value, currency) {
        return `//div[@id="tab-best"]//table[@class="w-currency_table"]//tbody//tr[count(//div[@id="tab-best"]//table//tbody//tr//td//a[text()="${currency}"]/../../preceding-sibling::tr)+1]//td[count(//th[text()="${value}"]/preceding-sibling::th)+1]`
    }

}

module.exports = new DollarPage();