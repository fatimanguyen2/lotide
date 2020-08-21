const assertEqual = require('./assertEqual')

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

assertEqual(1,1)