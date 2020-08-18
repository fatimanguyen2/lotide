const assertArraysEqual = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    }
  }
  return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
};

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



assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

