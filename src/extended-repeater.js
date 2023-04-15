const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(s, options) {
    let newStr = '';

    let optionsArray = ['repeatTimes', ['separator', '+'], ['addition', ''],'additionRepeatTimes', ['additionSeparator', '|']];
     
    if (!(optionsArray[1][0] in options)) {
        options.separator = optionsArray[1][1];
    }
     
    if (!(optionsArray[2][0] in options)) {
        options.addition = optionsArray[2][1];
    }
     
    if (!(options.additionRepeatTimes)) {
        options.additionRepeatTimes = 1;
    }
     
    if (!(optionsArray[4][0] in options)) {
        options.additionSeparator = optionsArray[4][1];
    }

    if (options.additionRepeatTimes !== 0) {
        newStr = options.addition;
        
        for (let i = 1; i < options.additionRepeatTimes; i++) {
            newStr += options.additionSeparator + options.addition;
        }
    }

    let res = s + newStr;

    for (let j = 1; j < options.repeatTimes; j++) {
        res += options.separator + s + newStr;
    }

    return res;
}

module.exports = {
  repeater
};
