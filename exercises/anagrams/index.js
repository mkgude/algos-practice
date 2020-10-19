// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const a = cleanString(stringA);
  const b = cleanString(stringB);
  if (a !== b) {
    return false;
  } else {
    return true;
  }
}
function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}
module.exports = anagrams;

// my solution
// function anagrams(stringA, stringB) {
//     // replace string special characters and spaces with '' and to lowercase and turn into array
//     const a = stringA.replace(/[^\w]/g, "").toLowerCase();
//     const b = stringB.replace(/[^\w]/g, "").toLowerCase();

//     // Do the lengths of the strings match?
//     // yes
//     if (a.length !== b.length) {
//       return false;
//     }
//     // no
//     let arrB = b.split("");
//     for (let char of a) {
//       if (!arrB.includes(char)) {
//         return false;
//         break;
//       } else {
//         arrB.splice(arrB.indexOf(char), 1);
//       }
//     }
//     return true;
//   }

// solution 1
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {};

//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }
