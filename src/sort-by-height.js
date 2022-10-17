const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    let newArr = [];
    let sortArr = [];
    let minNumber;
    let index;

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== -1) {
            sortArr.push(arr[j]);
        }
    }

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === -1) {
            newArr.push(arr[i]);
        } else {
            minNumber = Math.min(...sortArr);
            newArr.push(minNumber);
            index = sortArr.indexOf(minNumber);
            sortArr.splice(index, 1);
        
            minNumber = 0;
            index = 0;
        }
    
    }
    arr = newArr;
    return arr;
}

module.exports = {
  sortByHeight
};
