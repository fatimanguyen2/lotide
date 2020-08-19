function findKeyByValue(obj, value) {
  for (const key of Object.keys(obj)) {
    if (obj[key] === value) {
      return key;
    }
  }
  //Using for...in.. lopp
  // for (let key in obj) {
  //   if (obj[key] === value) {
  //     return key;
  //   }
  // }
  // return undefined;
}



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

findKeyByValue(bestTVShowsByGenre, "The Wire");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
