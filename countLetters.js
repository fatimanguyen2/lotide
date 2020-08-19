const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = str => {
  const obj = {};
  const noSpace = str.replace(/\s/g, '');
  for (let char of noSpace) {
    if (obj[char]) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
    }
  return obj;
  };