const Page = require('./page');
const I = actor();
class Menu extends Page {
    WeatherElement = '.weather';
    DollarElement = '.sub-inf';
    LoginButton = '.enter';

    async navigate(text) {
        await I.click(text);
    }
}
module.exports = new Menu();