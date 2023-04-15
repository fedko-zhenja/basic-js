const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }

    let copyArray = [];
    let controlSequencesArray = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
    let resaltArr = [];
    let index = 0;

    arr.forEach(el => {
        copyArray.push(el)
    })

    // console.log(copyArray, controlSequencesArray[0])

    for (let i = 0; i < copyArray.length; i++) {
        if(copyArray[i] === controlSequencesArray[0]) {
            index = copyArray.indexOf(controlSequencesArray[0])
            if (index === copyArray.length - 1) {
                return resaltArr;
            }else if(copyArray[i + 2] === controlSequencesArray[1] || copyArray[i + 2] === controlSequencesArray[3]) {
                i= i+2;
                continue;
            } else {
                i= i+1;
            }
        } else if (copyArray[i + 1] === controlSequencesArray[1]) {
            i = i + 1;
        } else if(copyArray[i] === controlSequencesArray[2]) {
            index = copyArray.indexOf(controlSequencesArray[2])
            if (index === copyArray.length - 1) {
                return resaltArr;
            } else {
                resaltArr.push(copyArray[i+1])
            }
        }  else if (copyArray[i + 1] === controlSequencesArray[3] && i+1 === 3){
            resaltArr.push(copyArray[i])
            i++;
            continue;            
        }else if (copyArray[i + 1] === controlSequencesArray[3]) {
            resaltArr.push(copyArray[i])
            resaltArr.push(copyArray[i])
            i = i + 1;
        } else if (i === 0 && copyArray[i] === controlSequencesArray[3]){
                continue;            
        }
        else if (i === 0 && copyArray[i] === controlSequencesArray[1]){
            continue;            
        }
        else {
            resaltArr.push(copyArray[i])
        }

        // if (copyArray[i] === controlSequencesArray[0] && copyArray[i + 2]) Х

    }

    return resaltArr;
}

module.exports = {
  transform
};
