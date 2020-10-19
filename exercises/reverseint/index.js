// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// // My Solution
// function reverseInt(n) {
//   let sign = Math.sign(n);
//   console.log(Math.sign(n));
//   let reverseN = parseInt(n.toString().split("").reverse().join(""));
//   return reverseN * sign;
// }

function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
