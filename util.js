const logger = require('./logger').logger;
const I = actor();
module.exports = {
    getRandomText: async function (length) {
        let rnd = '';
        while (rnd.length < length)
            rnd += Math.random().toString(36).substring(2);
        logger.trace('Generated ' + rnd.substring(0, length));
        return rnd.substring(0, length);
    },
    getWeather: async function (element) {
        let regex = /((\+[1-9]{1,2}|-[1-9]{1,2}|0)°)/;
        let weatherpage = await I.grabTextFrom(element);
        weatherpage = weatherpage.replace('−', '-');
        weatherpage = weatherpage.match(regex)[1];
        return weatherpage;
    },

};