// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/**
 * * Using the built in sort-method
 * @param {*} stringA 
 * @param {*} stringB 
 */
function anagrams(stringA, stringB) {
  return cleanUpFunction(stringA) === cleanUpFunction(stringB);    
}
function cleanUpFunction(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

/**
 * * first solution and a bit of more complicated one. 
 * @param {*} stringA 
 * @param {*} stringB 
 */
function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length)
    return false;

  for (let iterator in aCharMap) {
    if (aCharMap[iterator] !== bCharMap[iterator]) {
      return false;
    }
  }
  return true;
}

function buildCharMap(str) {
  let charMap = {};

  for (let chrs of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[chrs] = charMap[chrs] + 1 || 1;
  }

  return charMap;
}

module.exports = anagrams;
 