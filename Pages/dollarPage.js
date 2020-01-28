const Page = require('./page');

class DollarPage extends Page {

    async elementByValueAndCurrency(value, currency) {
        return `//div[@id="tab-best"]//table[@class="w-currency_table"]//tbody//tr[count(//div[@id="tab-best"]//table//tbody//tr//td//a[text()="${currency}"]/../../preceding-sibling::tr)+1]//td[count(//th[text()="${value}"]/preceding-sibling::th)+1]`
    }
    getCountAfterPoint (text) {
        return text.split('.').pop().length;
    }

    async getDollar (bank, currency) {
        return await this.getElementText(await this.elementByValueAndCurrency(bank, currency));
    }
}

module.exports = new DollarPage();