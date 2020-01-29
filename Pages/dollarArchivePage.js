
const I = actor();

class DollarArchivePage  {
    CalendarFromElement = '#calendar_from';
    CalendarToElement = '#calendar_to';
    SubmitButton = '[value=\'Показать\']';

    async elementSelectByTypeAndRange(range, type) {
        return `[id="calendar_${range}_popup"] [data-calendar="${type}"]`
    }

    async elementOptionByTypeAndValue(range, type, value) {
        return `[id="calendar_${range}_popup"] [data-calendar="${type}"] [value="${value}"]`
    }

    async elementByBankAndDate(bank, date) {
        return `//td[count(//th[text()="${bank}"]/preceding-sibling::th)+1][..//td="${date}"]`
    }

    async dayByRangeAndNumber(range, day) {
        return `//div[@id="calendar_${range}"]//a[contains(text(), '${day}')]`
    }

    async chooseDate(range, day, month, year) {
        await I.click(await this.elementSelectByTypeAndRange(range, 'y'));
        await I.click(await this.elementOptionByTypeAndValue(range, 'y', year));
        await I.click(await this.elementSelectByTypeAndRange(range, 'm'));
        await I.click(await this.elementOptionByTypeAndValue(range, 'm', month));
        await I.click(await this.dayByRangeAndNumber(range, day));
    }

    async setDate(startDate, endDate) {
        await I.click(this.CalendarFromElement);
        await this.chooseDate('from', startDate.getDate(), startDate.getMonth(), startDate.getFullYear());
        await I.click(this.CalendarToElement);
        await this.chooseDate('to', endDate.getDate(), endDate.getMonth(), endDate.getFullYear());
        await I.click(this.SubmitButton);
    }

    async getDollar(bank, date){
        return await I.grabTextFrom(await this.elementByBankAndDate(bank, date));
    }
}

module.exports = new DollarArchivePage();