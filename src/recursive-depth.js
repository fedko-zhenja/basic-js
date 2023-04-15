const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth = (arr) => {
        if (!Array.isArray(arr)) {
            return false;
        }

        let limitMin = 0;
        let limitMax = arr.map(this.calculateDepth)
        
        let depth = Math.max(limitMin, ...limitMax);
        
        return depth + 1;
    }
}

module.exports = {
  DepthCalculator
};
