const assertArraysEqual = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    }
  }
  return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
};

const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const overTwoElements = arr => arr.length > 2;
const isOdd = arr => arr.length % 2;
const singleMiddle = function(arr) {
  let index = Math.floor(arr.length / 2);
  return arr[index];
};
const doubleMiddle = arr => {
  let index = arr.length / 2;
  return [arr[index - 1], arr[index]];
};
//create middle function
const middle = arr => {
  //check if array has more than 2 elements (if not, return empty array)
  // if array more than 2 elements and odd number --> return single middle elemnt
  if (overTwoElements(arr) && isOdd(arr)) {
    return singleMiddle(arr);
  } else if (overTwoElements(arr) && !isOdd(arr)) {
    return doubleMiddle(arr);
  } else {
    return [];
  }
};
//array more than 2 elements and even number --> return 2 middle elemens


assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);