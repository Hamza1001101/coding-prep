// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/**
 * * Stefans Solution
 * @param {*} n 
 */
function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  //return parseInt(reversed, 10) * (n < 0 ? -1 : 1);
  return parseInt(reversed, 10) * Math.sign(n);
}

/**
 * * My first solution I came up.
 * @param {*} n
 */
// function reverseInt(n) {
//   let reversedStr = n.toString().split("").reverse().join("");
//   let result = "";
//   for (let rvr of reversedStr) {
//     if (!rvr.includes("-")) {
//       result = result + rvr;
//     } else if (rvr.includes("-")) {
//       result = "-" + result;
//     }
//   }
//   return parseInt(result, 10);
// 

/**
 * * There may be some constraints when implementing this question.
 * ! this is just useful when dealing with nunbers 
 */
const reverseInteger = num => {
  const toStr = Math.abs(num).toString().split("").reverse().join("");

  //if (toStr > Math.pow(2, 31)) return 0
  return parseInt(toStr, 10) * Math.sign(num);
}

module.exports = reverseInteger;
 