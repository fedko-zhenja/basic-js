const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(string) {
    const arrCode = (string.split('-'));
    let str = arrCode.join('');

    let arrayStr = []


    for (let index = 0; index < str.length; index++) {
        arrayStr.push(str[index])
    }


    let arr =['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let count = 0;
    for ( let i = 0; i < arrayStr.length; i++) {
        if (arr.includes(arrayStr[i])) {
            count++;
        }
    }

    if(count === 12) {
        return true;
    } else {
        return false;
    }
}
module.exports = {
  isMAC48Address
};
