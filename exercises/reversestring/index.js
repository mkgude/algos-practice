// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversedStr = "";
  for (let character of str) {
    reversedStr = character + reversedStr;
  }
  return reversedStr;
}

module.exports = reverse;

// function reverse(str) {
// // turn str into array
//   const splitStr = str.split("");
// // reverse array
//   let reverseStr = splitStr.reverse();
// // join array back into string
//   let joinStr = reverseStr.join("");
//   return joinStr;
// }

// function reverse(str) {
//   // create new variable to store result, empty string
//   let newStr = str.split("").reverse().join("");
//   return newStr;
// }

// function reverse(str) {
//   let reversedStr = "";
//   for (let character of str) {
//     reversedStr = character + reversedStr;
//   }
//   return reversedStr;
// }

// function reverse(str) {
//   return str.split("").reduce((reversed, character) => {
//     return character + reversed;
//   }, "");
// }
