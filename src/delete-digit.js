const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(item) {
    let newArray = [];

    let newString = item.toString();

    let num;

    let resalt;

    // let newArrayNumber = newString.split('');

    for (let i = 0; i < newString.length; i++) {
        num = newString.slice(0, i) + newString.slice(i + 1);

        newArray.push(num);
    }

    resalt = Math.max(...newArray.map(item => +item));

    return resalt;
}

module.exports = {
  deleteDigit
};
