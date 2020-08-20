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

const assertArraysEqual = (arr1, arr2) => {
  let longest;
  if (arr1.length > arr2.length) {
    longest = arr1;
  } else {
    longest = arr2;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    }
  }
  return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
};

assertArraysEqual(map(words, word => 'meow'), ['meow', 'meow', 'meow', 'meow', 'meow' ]);