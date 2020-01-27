const I = actor();

class Page {
    logger = require('../logger').logger;

    clickElement(element) {
        I.click(element);
    }

    openPage(URL) {
        I.amOnPage(URL);
    }

    enterTextToElement(element, text) {
        this.logger.trace(`Enter ${text}`);
        I.fillField(element, text);
    }

    pressKey(key) {
        I.pressKey(key);
    }

    findElementByText(text) {
        return I.see(text);
    }

    clearField(field) {
        I.clearField(field);
    }
    async getAttribute(element, attribute){
        return await I.grabAttributeFrom(element, attribute);
    }
    async getRandomText(length) {
        let rnd = '';
        while (rnd.length < length)
            rnd += Math.random().toString(36).substring(2);
        this.logger.trace('Generated ' + rnd.substring(0, length));
        return rnd.substring(0, length);
    }

    //
    // async getElementText(elem) {
    //     return await elem.getText().then((text) => {
    //         this.logger.trace(`Get message - ${text}`);
    //         return text;
    //     });
    // }
    //

}

module.exports = Page;