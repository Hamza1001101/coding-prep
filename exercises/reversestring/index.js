// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/**
 * * More manuel approuch
 * @param {*} str
 */
// function reverse(str) {
//     let reversed = ''
//     for (const iterator of str) {
//         reversed = iterator + reversed
//     }
//     return reversed
// }

/**
 * * Another complicated way of implementing it.
 * * a bit of more complicated
 * @param {*} str
 */ 

function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '')
}

/**
 * * Easier way of doing
 * @param {*} str
 */
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

module.exports = reverse;
