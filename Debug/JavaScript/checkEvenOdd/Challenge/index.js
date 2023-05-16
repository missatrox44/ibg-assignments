// Open your terminal at index.js 
// Run node index.js to start program

// Bug: The following code snippet is intended to check if a number is even or odd, but it's not producing the correct result.

function checkEvenOdd(number) {
  if (number / 2 === 1) {
    return "Even";
  } else {
    return "Odd";
  }
}

let result1 = checkEvenOdd(4);
console.log("Result1:", result1); // Should print Even

let result2 = checkEvenOdd(500);
console.log("Result2:", result2); // Should print Even

let result3 = checkEvenOdd(37);
console.log("Result3:", result3); // Should print Odd

let result4 = checkEvenOdd(98);
console.log("Result4:", result4); // Should print Even

let result5 = checkEvenOdd(47);
console.log("Result5:", result5); // Should print Odd