const logger = require('./logger').logger;
module.exports = {
    getRandomText: async function (length) {
        let rnd = '';
        while (rnd.length < length)
            rnd += Math.random().toString(36).substring(2);
        logger.trace('Generated ' + rnd.substring(0, length));
        return rnd.substring(0, length);
    }
};