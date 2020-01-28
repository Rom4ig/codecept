const expect = require('chai').expect;
module.exports = async function (array) {
    for (let i = 1; i < array.length; i++) {
        expect(parseFloat((array[i]).replace(',', '.'))).to.gte(parseFloat((array[i - 1]).replace(',', '.')));
    }
};