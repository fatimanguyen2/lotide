const assertArraysEqual = require('./assertArraysEqual');
const words = ["ground", "control", "to", "major", "tom"];
// const map = (arr, callback) => {
//   const results= [];
//   for (item of arr) {
//     callback(item);
//   }
//   return results;
// };
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
// assertArraysEqual(map(words, word => 'meow'), ['meow', 'meow', 'meow', 'meow', 'meow' ]);