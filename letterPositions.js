const assertArraysEqual = require('./assertArraysEqual')
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i ++) {
    const key = sentence[i];
    if (key !== ' ') {
      if (results[key]) {
        results[key].push(i);
      } else {
        results[key] = [i];
      }
    }
  }
  return results;
};
module.exports = letterPositions;
// assertArraysEqual(letterPositions('hello')['h'], [0]);
// assertArraysEqual(letterPositions('hello')['e'], [1]);
// assertArraysEqual(letterPositions('hello')['l'], [2, 3]);
// assertArraysEqual(letterPositions('hello')['o'], [4]);
