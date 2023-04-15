const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(stringItem) {
    let number;
    let halfLifePeriod = HALF_LIFE_PERIOD;
    let modernActivity = MODERN_ACTIVITY;
    let a;
    let b;

    if (isNaN(stringItem) || typeof stringItem !== 'string') {
      return false;
    }

    a = halfLifePeriod;
    b = Math.log(modernActivity / stringItem)

    number = Math.ceil((a * b) / 0.693);

    if (number < 0 || isNaN(number) || number === Infinity) {
        return false;
    }
    
    return number;
}

module.exports = {
  dateSample
};
