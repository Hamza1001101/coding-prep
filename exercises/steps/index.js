// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


/**
 * * Recursion
 * @param {*} n 
 */

// function steps(n, row = 0, stair = "") {
//   if (n === row) {
//     return;
//   }

//   if (n === stair.length) {
//     console.log(stair);
//     return steps(n, row + 1);
//   }

//   if (stair.length <= row) {
//     stair += "#"; 
//   } else {
//     stair += "";
//   }
//   steps(n, row, stair);
// }

const steps = (n) => {

  for (let row = 0; row < n; row++) {

    let hashtag = ''
    for (let column = 0; column < n; column++) {

      if (column <= row) {
        hashtag += '#'
      } 
      else {
        hashtag += ' '
      }
    }

    console.log(hashtag)
  }
}

module.exports = steps;
