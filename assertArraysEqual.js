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

assertArraysEqual([1, 2], [1, 2, 3, 4, 5, 6]);