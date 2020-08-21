const assertEqual = require('./assertEqual')

const head = array => array[0];

assertEqual(head([]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), "Hello");