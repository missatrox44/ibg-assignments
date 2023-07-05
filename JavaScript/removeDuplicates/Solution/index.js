// Open your terminal at index.js 
// Run node index.js to start program

// Bug: The following code snippet should remove duplicates from an array, but it's not working as expected.

function removeDuplicates(array) {
  let uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!uniqueArray.includes(array[i])) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}

let array1 = [1, 2, 3, 3, 4, 4, 5];
let result1 = removeDuplicates(array1);
console.log("Unique array 1:", result1); // should print [ 1, 2, 3, 4, 5]

let array2 = [3, 3, 7, 7, 9, 11, 11];
let result2 = removeDuplicates(array2);
console.log("Unique array 2:", result2); // should print [ 3, 7, 9, 11]

let array3 = [14, 16, 16, 20, 23, 23, 23];
let result3 = removeDuplicates(array3);
console.log("Unique array 3:", result3); // should print [ 14, 16, 20, 23]


let array4 = [32, 32, 33, 43, 44, 78, 78, 109, 109, 167, 200];
let result4 = removeDuplicates(array4);
console.log("Unique array 4:", result4); // should print [ 32, 33, 43, 44, 78, 109, 167, 200]

