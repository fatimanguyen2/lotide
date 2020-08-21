const assertEqual = require('./assertEqual');

const eqArrays = (arr1, arr2) => {
  let longest;
  if (arr1.length > arr2.length) {
    longest = arr1;
  } else {
    longest = arr2;
  }
  for (let i = 0; i < longest.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
