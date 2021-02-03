// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/**
 * * My first though. 
 * @param {*str} str 
 */

function palindrome(str) {
  if (str.split("").reverse().join("") === str) {
    return true;
  } else {
    return false;
  }
}

/**
 * * ES6 + Ternary operation, --> shorten and cleaner
 * @param {str} str
 */
const palindrome = (str) => {
  return str.split("").reverse().join("") === str ? true : false;
};

module.exports = palindrome;
