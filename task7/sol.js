"use strict";
/*let age = 20; // You can change this value to test with different ages

if (age > 18) {
  console.log("You are an adult");
}*/
///////////////////////////////////////////////////////////////////////////////////
/*let num = 4; // You can change this value to test with different numbers

if (num % 2 === 0) {
  console.log("The number is even");
}*/
/////////////////////////////////////////////////////////////////////////////////////
/*let char = 'A'; // You can change this value to test with different characters

if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
  console.log("It's a letter");
}
*/
///////////////////////////////////////////////////////////////////////////////////////
/*let list = [1, 2, 3]; // You can change this value to test with different data types

if (Array.isArray(list)) {
  console.log("It's an array");
}*/
///////////////////////////////////////////////////////////////////////////////////////
/*let x = 5; // You can change this value to test with different numbers

if (x > 0) {
  console.log(`${x} is a positive number`);
}*/
////////////////////////////////////////////////////////////////////////////////////////
/*let z = 9; // You can change this value to test with different numbers

if (z % 3 === 0) {
  console.log(`${z} is a multiple of 3`);
}*/
////////////////////////////////////////////////////////////////////////////////////////
let password = "strongPassword"; // You can change this value to test different passwords

if (password.length >= 8) {
  console.log("Your password is strong");
}
///////////////////////////////////////////////////////////////////////////////////////////
let age = 30; // You can change this value to test different ages

if (age >= 18 && age <= 65) {
  console.log("You are of working age");
}
///////////////////////////////////////////////////////////////////////////////////////////
let color = "green"; // You can change this value to test different colors

if (color === "red" || color === "green" || color === "blue") {
  console.log("color is a primary color");
}
/////////////////////////////////////////////////////////////////////////////////////////////
function isNumber(value) {
    // isNaN() returns true if the value is NaN (Not a Number)
    // So, we need to check the opposite condition to verify if the value is a number
    if (!isNaN(value)) {
      return true; // The value is a number
    } else {
      return false; // The value is not a number
    }
  }
  
  // Example usage:
  console.log(isNumber(123));   // true
  console.log(isNumber("123")); // true (because string "123" is a valid number representation)
  console.log(isNumber("abc")); // false
  console.log(isNumber(NaN));   // false
  




