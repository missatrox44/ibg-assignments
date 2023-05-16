// Open your terminal at index.js 
// Run node index.js to start program

// Bug: The following code snippet is intended to calculate the factorial of a given number, but it's not returning the correct factorial value.

function calculateFactorial(n) {
  let factorial = 1;
  for (let i = n; i >= 0; i--) {
    factorial *= i;
  }
  return factorial;
}

let result1 = calculateFactorial(5);
console.log("Result1:", result1); // Should print 120

let result2 = calculateFactorial(3);
console.log("Result2:", result2); // Should print 6

let result3 = calculateFactorial(-4);
console.log("Result3:", result3); // Should print 1

let result4 = calculateFactorial(8);
console.log("Result4:", result4); // Should print 40320

let result5 = calculateFactorial(11);
console.log("Result5:", result5); // Should print 39916800