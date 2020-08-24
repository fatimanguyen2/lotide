const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], 'Lighthouse');
assertEqual(result[1], 'Labs');

const words = ['meow'];
tail(words);
assertEqual(tail(words).length, 0);