const assertArraysEqual = require('./assertArraysEqual');
const without = (source, itemsToRemove) => {
  let result = [];
  for (let item of source) {
    let found = false;
    for (let remove of itemsToRemove) {
      if (item === remove) {
        found = true;
      }
    }
    if (found === false) {
      result.push(item);
    }
  }
  return result;
};

module.exports = without;
// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]



// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);