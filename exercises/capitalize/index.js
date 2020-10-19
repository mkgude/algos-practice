// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // create result which is first character of the input string capitalized
  let result = str[0].toUpperCase();
  // for each char in string
  for (let i = 1; i < str.length; i++) {
    //  if char to left of space
    if (str[i - 1] === " ") {
      //  capitalize and add to result
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  //  else add result
  return result;
}

module.exports = capitalize;

// // my Solution
// function capitalize(str) {
//     // separate words into an array
//     const words = str.split(" ");
//     // loop through words and capitalize first letter and join back to rest of word
//     for (let i = 0; i < words.length; i++) {
//       words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
//       str = words.join(" ");
//     }
//     // join words together into a string

//     return str;
//   }

// // Solution 1
// function capitalize(str) {
//     // make an empty array words
//     const words = [];
//     // split the inptu string by spaces to get array
//     for (let word of str.split(" ")) {
//       // for each word in array
//       // upper case first letter
//       // join the first letter with rest of string
//       // push result into words array
//       words.push(word[0].toUpperCase() + word.slice(1));
//     }
//     // join words into a string
//     // return string
//     return words.join(" ");
//   }
