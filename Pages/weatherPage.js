const Page = require('./page');

class WeatherPage extends Page {
    WeatherPageElement ='//td[@class="fcurrent-top"]';
    TownElement = '//a[@class="dotted"]';

    selectTown(town) {
        this.clickElement(town);
    }
}

module.exports = new WeatherPage();