// Open your terminal at index.js 
// Run node index.js to start program

// Bug: The following code snippet should reverse a string, but it's not reversing the string correctly.

function reverseString(str) {
  let reversed = "";
  for (let i = 2; i <= str.length; i++) {
    reversed += str.charAt(str.length - i - 1); 
  }
  reversed += "BUG"; 
  return reversed;
}

let result1 = reverseString("Hello");
console.log("Result1:", result1); // Should print elloH

let result2 = reverseString("Institute");
console.log("Result2:", result2); // Should print etutitsnI

let result3 = reverseString("coding");
console.log("Result3:", result3); // Should print gnidoc

let result4 = reverseString("computer");
console.log("Result4:", result4); // Should print retupmoc

let result5 = reverseString("Tacocat");
console.log("Result5:", result5); // Should print tacocaT