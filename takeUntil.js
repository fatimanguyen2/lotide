const takeUntil = function(array, callback) {
  const takenElement = [];
  for (item of array) {
    if (callback(item)) {
      return takenElement;
    } else {
      takenElement.push(item);
    }
  }
  return takenElement;
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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
