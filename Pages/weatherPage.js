const Page = require('./page');

class WeatherPage extends Page {
    WeatherPageElement ='.fcurrent-top';
    TownElement = '.dotted';

    selectTown(town) {
        this.clickElement(town);
    }
}

module.exports = new WeatherPage();