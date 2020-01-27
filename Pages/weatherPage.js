const Page = require('./page');

class WeatherPage extends Page {
    WeatherPageElement = element(by.css('[class="fcurrent-top"]'));
    TownElement = element(by.css('[class="dotted"]'));

    async selectTown(town) {
        await this.clickElement(element(by.linkText(town)));
    }
}

module.exports = new WeatherPage();