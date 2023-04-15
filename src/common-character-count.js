const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(firstString, secondString) {
    let firstArray = firstString.split('');

    let countLetter = 0;

    firstArray.forEach(el => {
        if (secondString.indexOf(el) !== -1) {
            secondString = secondString.replace(el, '');
            countLetter++;
        }
    })

    return countLetter;
  }

module.exports = {
  getCommonCharacterCount
};
