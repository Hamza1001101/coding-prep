// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/**
 * * This particular problem can be applied to many
 * * other problems (String)
 * @param {*} str
 */
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";
  for (const char of str) {
    /**
     * * Nice and neat of doing it. 
     * * boolean logic.
     * 
     * * we using the OR-operator to see if that value exists yet. 
     * * So one way of handling this eloquently in this particular 
     * * case would be to say if adding one onto this number 
     * * resulted in a null value that's fine.
     * * Then instead assign the value of 1 like so.
      ** So if this is falsie then otherwise assign one to char 
      ** at char and we end up with the same objecT       
     */
    charMap[char] = charMap[char] + 1 || 1;

    /**
     * Another logic would be
     */
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  for (let key in charMap) {
    if (charMap[key] > max) {
      max = charMap[key];
      maxChar = key;
    }
    return maxChar;
  }
}

module.exports = maxChar;
