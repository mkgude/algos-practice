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

function steps(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }
  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  steps(n, row, stair);
}

module.exports = steps;

// Solution 1
// function steps(n) {
//     // from 0 to n
//     for (let row = 0; row < n; row++) {
//       // create an empty string
//       let stair = "";
//       for (let column = 0; column < n; column++) {
//         if (column <= row) {
//           stair += "#";
//         } else {
//           stair += " ";
//         }
//       }
//       console.log(stair);
//     }
//     //  if current column = or < current row add #
//     //  else add space to stair
//     // console log string
//   }