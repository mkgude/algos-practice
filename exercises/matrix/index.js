// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // variables
  // need a results array
  const results = [];
  // need a counter that increases until nxn
  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  let counter = 1
  // start row , end row, start column, end column
  let startRow = 0
  let endRow = n-1
  let startColumn = 0
  let endColumn = n-1
   while (startRow<= endRow && startColumn <= endColumn){
    //Top Row
    for (let i=startColumn; i<=endColumn; i++){
       results[startRow][i]=counter;
       counter++;
     }
     startRow++
     // right column
     for (let i= startRow; i<=endRow; i++){
       results[i][endColumn]=counter;
       counter++;
     }
     endColumn--;
    // bottom row
     for (let i=endColumn; i>=startColumn; i--){
       results[endRow][i]=counter;
       counter++;
     }
     endRow--;
     // start column
     for (let i=endRow; i>=startRow; i--){
        results[i][startColumn]=counter;
        counter++;
     }
     startColumn++
   } 
  return results;
}

module.exports = matrix;

// function matrix(n) {
//     // create an empty array or arrays
//     const results = [];
//     // create a counter variable starting at 1
//     for (let i = 0; i < n; i++) {
//       results.push([]);
//     }

//     let count = 1;
//     let startColumn = 0; // what num we are pushing in
//     let endColumn = n - 1; // keep track of last index
//     let startRow = 0; // keep track of start row
//     let endRow = n - 1; // keep track of last index

//     // as long as start column <= end column and (start row <= end row)
//     while (startColumn <= endColumn && startRow <= endRow) {
//       // top row
//       for (let i = startColumn; i <= endColumn; i++) {
//         results[startRow][i] = count;
//         count++;
//       }
//       //  loop from start column to end column
//       // at results [start_row][i] assing counter variable
//       //  increment counter
//       startRow++;
//     }
//     for (let i = startRow; i <= endRow; i++) {
//       results[i][endColumn] = count;
//       count++;
//       //  increment start row
//       //  loop from start row to end row
//       //      at results[i][end_column] assign counter variable
//     }
//     //  decrement end row
//     endColumn--;
//     // Bottom row
//     for (let i = endColumn; i >= startColumn; i--) {
//       results[endRow][i] = counter;
//       counter++;
//     }
//     endRow--; // again we are moving from right to left
//     // start column
//     for (let i = endRow; i >= startRow; i--) {
//       results[i][startColumn] = counter;
//       counter++;
//     }
//     startColumn++;
//     return results;
//   }

// Solution 1
// function matrix(n) {
//   // set up empty array
//   const result = [];
//   // create counter variable starting at 1
//   let counter = 1;
//   // set up all variables for start/end row/column
//   let startRow = 0;
//   let startColumn = 0;
//   let endRow = n - 1;
//   let endColumn = n - 1;

//   // loop through start to end column
//   while (startRow <= endRow && startColumn <= endColumn) {
//     for (let i = startColumn; i <= endColumn; i++) {
//       result.push(counter);
//       counter++;
//     }
//     startRow++;
//   }
//   for (let i = startRow; i <= endRow; i++) {
//     result[i][endRow];
//   }
// }