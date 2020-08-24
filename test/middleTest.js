const assert = require('chai').assert;
const middle = require ('../middle');

describe('#middle', () => {
  it('should return the middle element for uneven arrays', () => {
    const input = [1, 2, 3, 4, 5];
    assert.deepEqual(middle(input), [3]);
  });
  it('should return middle two element for even arrays', () => {
    const input = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(middle(input), [3, 4])
  });
});
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);