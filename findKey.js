const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = (obj, callback) => {
  for (key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
  //iterate through object
  ///return first key that callback function returns truthy 
  // if no key found, return undefined
};

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 'meow') // => "noma"
assertEqual(result, undefined);