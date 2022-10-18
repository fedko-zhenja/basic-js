const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (Array.isArray(members) !== true) {
        return false;
    }

    let newArr = [];
    let upStr = '';
    let firstLetter = '';

    for (let j = 0; j < members.length; j++) {
        if (typeof members[j] === 'string') {
            upStr = members[j].toUpperCase().trim();
            newArr.push(upStr);
            newStr = '';
        }
        
    }

    let sortArr = newArr.sort();

    for(let i = 0; i < sortArr.length; i++) {
        firstLetter += sortArr[i].charAt(0);

    }

    return firstLetter;
}

module.exports = {
  createDreamTeam
};
