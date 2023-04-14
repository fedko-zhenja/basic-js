const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(files) {
    let resaltNameArray = [];
    let count = 0;
    let str = '';
    let num;

    files.forEach(el => {
        if (resaltNameArray.includes(el) === false){
            count = 0};
        if (resaltNameArray.includes(el)) {
            count++;
            num = String(count);
            if(count )
            str = `${el}(${num})`;
            console.log(num, str)
            resaltNameArray.push(str);
        }  else {
            resaltNameArray.push(el);
      
          }
          console.log(resaltNameArray)
    })
  
    return resaltNameArray;
  }

module.exports = {
  renameFiles
};
