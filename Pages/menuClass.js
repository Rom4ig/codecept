const Page = require('./page');
const I = actor();
class Menu extends Page {
    WeatherElement = '.weather';
    DollarElement = '.sub-inf';
    LoginButton = '.enter';
    Name = '.uname';

    // async elementByLinkText(text) {
    //     return element(by.linkText(text));
    // }
    async navigate(text) {
        //let elem = await this.elementByLinkText(text);
        await I.click(text);
    }
}
module.exports = new Menu();