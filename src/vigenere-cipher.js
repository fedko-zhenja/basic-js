const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(item = true) {
        this.item = item;
    }

    encrypt(messageItem, keyItem) {
        if (!messageItem || !keyItem) {
            throw new Error('Incorrect arguments!');
        }
        
        let lettersStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        messageItem = messageItem.toUpperCase();
        keyItem = keyItem.toUpperCase();

        let lettersStrIndex;
        let lettersStrKey;
        let searchItem;

        let encryptString = '';
        let cycleIndex = 0;

        for (let el of messageItem) {
            if (lettersStr.includes(el)) {
                lettersStrIndex = lettersStr.indexOf(el);
                searchItem = cycleIndex % keyItem.length;
                lettersStrKey = lettersStr.indexOf(keyItem[searchItem]);

                lettersStrIndex = (lettersStrIndex + lettersStrKey) % lettersStr.length;

                encryptString += lettersStr[lettersStrIndex];

                lettersStrIndex = 0;
                lettersStrKey = 0;
                searchItem = 0

                cycleIndex++;
            } else {
                encryptString += el;
            }
        }

        if (!this.item) {
            let splitStr = encryptString.split('');
            let reverseStr = splitStr.reverse();
            let joinStr = reverseStr.join('');

            encryptString = joinStr;

            return encryptString;
        }

        return encryptString;
    }

    decrypt(messageItem, keyItem) {
        if (!messageItem || !keyItem) {
            throw new Error('Incorrect arguments!');
        }

        let lettersStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        messageItem = messageItem.toUpperCase();
        keyItem = keyItem.toUpperCase();

        let lettersStrIndex;
        let lettersStrKey;
        let searchItem;

        let decryptString = '';
        let cycleIndex = 0;

        for (let el of messageItem) {
            if (lettersStr.includes(el)) {
                lettersStrIndex = lettersStr.indexOf(el) + lettersStr.length;
                searchItem = cycleIndex % keyItem.length;
                lettersStrKey = lettersStr.indexOf(keyItem[searchItem]);

                lettersStrIndex = (lettersStrIndex - lettersStrKey) % lettersStr.length;

                decryptString += lettersStr[lettersStrIndex];

                lettersStrIndex = 0;
                lettersStrKey = 0;
                searchItem = 0;

                cycleIndex++;
            } else {
                decryptString += el;
            }
        }

        if (!this.item) {
            let splitStr = decryptString.split('');
            let reverseStr = splitStr.reverse();
            let joinStr = reverseStr.join('');

            decryptString = joinStr;

            return decryptString;  
        }

        return decryptString;
    }
}

module.exports = {
  VigenereCipheringMachine
};
