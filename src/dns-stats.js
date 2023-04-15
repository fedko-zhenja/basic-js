const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(item) {
    let newString;
    let obj = {};

    item.forEach(el => {
        el = el.split('.').reverse();

        newString = ''

        el.forEach(i => {
            newString += '.' + i;
            if (obj[newString]) {
                obj[newString]++;
            } else {
                obj[newString] = 1;
            }
        })
    })
    return obj;
}

module.exports = {
  getDNSStats
};
