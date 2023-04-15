const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    arr: [],

    getLength() {
        return this.arr.length;
    },

    addLink(item) {
        this.arr.push(`( ${item} )`);
        return chainMaker;
    },

    removeLink(item) {
        if (!this.arr[item] || typeof item !== 'number' || item < 1) {
            this.arr = [];
            throw new Error("You can't remove incorrect link!");
        }

        this.arr.splice(item - 1, 1);
        return chainMaker;
    },

    reverseChain() {
        this.arr.reverse();
        return chainMaker;
    },

    finishChain() {
        let resaltArr = this.arr.join('~~');
        this.arr = [];

        return resaltArr;
    }
};

module.exports = {
  chainMaker
};
