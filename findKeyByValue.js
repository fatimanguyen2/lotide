const assertEqual = require('./assertEqual')
const findKeyByValue = function(obj, value) {
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
};



const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

findKeyByValue(bestTVShowsByGenre, "The Wire");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
