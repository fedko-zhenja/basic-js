const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {  
    if (date === undefined) return "Unable to determine the time of year!";

    if (Object.prototype.toString.call(date) !== "[object Date]" || Object.getOwnPropertyNames(date).length > 0) throw Error("Invalid date!");

    let now = date;
    let season = now.getMonth()
  
    if (season >= 11 || season < 2) return "winter";

    if (season >= 2 && season < 5) return "spring";

    if (season >= 5 && season < 8) return "summer";

    if (season >= 8 && season < 11) return "autumn";
  }

module.exports = {
  getSeason
};
