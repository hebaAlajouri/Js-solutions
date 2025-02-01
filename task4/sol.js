"use strict";
function findSmallestValue(arr) {
    return Math.min(...arr);  // Spread syntax to pass array elements as individual arguments
  }
  
  // Test the function
  let numbers = [7, 2, 9, 5, 1];
  console.log(findSmallestValue(numbers));  // Output: 1
/////////////////////////////////////////////////////////////////////////////////////////////////
function sortStringAlphabetically(str) {
    // Convert the string to an array, sort the array, and join it back into a string
    return str.split('').sort().join('');
  }
  
  // Test the function
  let inputString = "codingacademy";
  console.log(sortStringAlphabetically(inputString));  // Output: "aaccddegimnoy"
//////////////////////////////////////////////////////////////////////////////////////////////////
function factorial(n) {
    if (n === 0) {
      return 1;  // Factorial of 0 is 1
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;  // Multiply result by each number from 1 to n
    }
    return result;
  }
  
  // Test the function
  let num = 8;
  console.log(factorial(num));  // Output: 40320
/////////////////////////////////////////////////////////////////////////////////////////////////////
function checkEvenOdd(num) {
    if (num % 2 === 0) {
      console.log(num + " is Even");
    } else {
      console.log(num + " is Odd");
    }
  }
  
  // Test the function
  checkEvenOdd(4);  // Output: 4 is Even
  checkEvenOdd(7);  // Output: 7 is Odd
////////////////////////////////////////////////////////////////////////////////////////////////////
function addUp(n) {
    let sum = 0;
    for (let i = n; i >= 0; i--) {
      sum += i;  // Add the current number to sum
    }
    return sum;
  }
  
  // Test the function
  console.log(addUp(6));  // Output: 21
///////////////////////////////////////////////////////////////////////////////////////////////////////
function analyzeArray(arr) {
    let lowest = Math.min(...arr);  // Find the lowest element
    let highest = Math.max(...arr); // Find the highest element
    let length = arr.length;        // Get the length of the array
    let sum = arr.reduce((acc, num) => acc + num, 0);  // Sum of all elements
    let average = sum / length;     // Calculate the average
    
    // Store the criteria in a new array
    let result = [lowest, highest, length, average];
    
    return result;  // Return the new array with the results
  }
  
  // Test the function
  let array = [10, 2, 30, 5, 15];
  console.log(analyzeArray(array));  // Output: [2, 30, 5, 12.4]
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function countWords(str) {
    // Split the string by spaces and filter out any empty strings
    let words = str.trim().split(/\s+/);  
    return words.length;  // Return the number of words
  }
  
  // Test the function
  console.log(countWords("Coding Academy by Orange"));  // Output: 4
//////////////////////////////////////////////////////////////////////////////////////////////////  
function multiplyByLength(arr) {
    let length = arr.length;  // Get the length of the array
    return arr.map(element => element * length);  // Multiply each element by the length
  }
  
  // Test the function
  let result = multiplyByLength([1, 2, 3, 4]);
  console.log(result);  // Output: [4, 8, 12, 16]
/////////////////////////////////////////////////////////////////////////////////////////////////
function checkEnding(str1, str2) {
    return str1.endsWith(str2);  // Check if str1 ends with str2
  }
  
  // Test the function
  console.log(checkEnding("CodingSchool", "Ac"));  // Output: false
  console.log(checkEnding("CodingSchool", "ool")); // Output: true
//////////////////////////////////////////////////////////////////////////////////////////////
function repeatChars(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      result += str.charAt(i) + str.charAt(i);  // Add each character twice
    }
    return result;
  }
  
  // Test the function
  console.log(repeatChars("hello"));  // Output: "hheelllloo"
  console.log(repeatChars("abc"));    // Output: "aabbcc"
//////////////////////////////////////////////////////////////////////////////////////////////
function findIndex(array, element) {
    return array.indexOf(element);  // Returns the index of the element
  }
  
  // Test the function
  console.log(findIndex([10, 20, 30, 40, 50], 30));  // Output: 2
  console.log(findIndex(["apple", "banana", "cherry"], "banana"));  // Output: 1
  console.log(findIndex([1, 2, 3, 4], 5));  // Output: -1 (element not found)
///////////////////////////////////////////////////////////////////////////////////////////////
  