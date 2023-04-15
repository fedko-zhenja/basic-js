const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
    if (matrix[0][0] === 0 && matrix.length === 1)  {
        return matrix[0][0];
    }
    let subArrayLength = matrix[0].length;
    let matrixLength = matrix.length;

    let newArray = [];
    let subArray = [];
    let subArrayTwo = [];

    for (let i = 0; i < subArrayLength; i++) {
        for (let j = 0; j < matrix.length; j++) {
            subArray.push(matrix[j][i]);
        }
    }

    for (let index = 0; index < subArray.length; index++) {
        newArray.push(subArray.splice(0, matrixLength))
        index = 0;
    }

    let res = 0;

    for (let a = 0; a < newArray.length; a++) {
        for (let b = 0; b < newArray[a].length; b++) {
            if(newArray[a][b] === 0) {
                b = newArray[a].length;
            } else {
                res += newArray[a][b]
            }
        }
    }
    return res;
}

module.exports = {
  getMatrixElementsSum
};
