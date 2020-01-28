const Page = require('./page');
const I = actor();
class DollarArchivePage extends Page {
    CalendarFromElement = '#calendar_from';
    CalendarToElement = '#calendar_to';
    SubmitButton = '[value=\'Показать\']';

    async elementSelectByTypeAndRange(range, type) {
        return `//div[@id="calendar_${range}_popup"]//div/span/select[@data-calendar="${type}"]`
    }

    async elementOptionByTypeAndValue(range, type, value) {
        return `//div[@id="calendar_${range}_popup"]//div/span/select[@data-calendar="${type}"]/option[@value="${value}"]`
    }

    async elementByBankAndDate(bank, date) {
        return `//td[count(//th[text()="${bank}"]/preceding-sibling::th)+1][..//td="${date}"]`
    }

    async dayByRangeAndNumber(range, day) {
        return `//div[@id="calendar_${range}"]//a[contains(text(), '${day}')]`
    }

    async chooseDate(range, day, month, year) {
        await this.clickElement(await this.elementSelectByTypeAndRange(range, 'y'));
        await this.clickElement(await this.elementOptionByTypeAndValue(range, 'y', year));
        await this.clickElement(await this.elementSelectByTypeAndRange(range, 'm'));
        await this.clickElement(await this.elementOptionByTypeAndValue(range, 'm', month));
        await this.clickElement(await this.dayByRangeAndNumber(range, day));
    }

    async setDate(startDate, endDate) {
        await this.clickElement(this.CalendarFromElement);
        await this.chooseDate('from', startDate.getDate(), startDate.getMonth(), startDate.getFullYear());
        await this.clickElement(this.CalendarToElement);
        await this.chooseDate('to', endDate.getDate(), endDate.getMonth(), endDate.getFullYear());
        await this.clickElement(this.SubmitButton);
    }
}
module.exports = new DollarArchivePage();