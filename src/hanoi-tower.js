const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(diskNumber, turnSpeed) {
    let obj = {};
    let count;
    let h;
    let s;

    count = Math.pow(2, diskNumber);
    h = (count - 1) / turnSpeed;
    s = Math.floor(h * 3600);

    obj.turns = count - 1;
    obj.seconds = s;
    
    return obj;
  }

module.exports = {
  calculateHanoi
};
