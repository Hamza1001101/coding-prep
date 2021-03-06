// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const vowels = ["a", "e", "i", "u", "o"];
  let counter = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      counter++;
    }
  }
  return counter;
}


/**
 * * Regex 
 * @param {*} str 
 */

const vowelsRegex = (str) => {
  const matches = str.match(/[aiueo]/gi);
  return matches ? matches.length : 0;
}; 

module.exports = vowels;
