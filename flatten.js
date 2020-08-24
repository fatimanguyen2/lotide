const assertArraysEqual = require('./assertArraysEqual')

const flatten = arr => {
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      for (const innerItem of item) {
        result.push(innerItem);
      }
    } else {
      result.push(item);
    }
  }
  return result;
};

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
module.exports = flatten;