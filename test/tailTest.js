const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', function () {
  it('should return 2 for ["Hello", "Lighthouse", "Labs"].length', () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  })
  it('should return ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  })
})

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], 'Lighthouse');
// assertEqual(result[1], 'Labs');

// const words = ['meow'];
// tail(words);
// assertEqual(tail(words).length, 0);