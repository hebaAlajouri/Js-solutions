"use strict";

let numbers = [10, 20, 30, 40, 50];


numbers.forEach(function(number) {
    console.log(number);
});
/////////////////////////////////////////
// Create an array of numbers
 numbers = [1, 2, 3, 4, 5];

// Use map() to square each element and return a new array
let squaredNumbers = numbers.map(function(number) {
    return number * number;
});

// Print the new array
console.log(squaredNumbers);
/////////////////////////////////////////////////
// Create an array of numbers
 numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use filter() to keep only even numbers
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0; // Condition: Keep only even numbers
});

// Print the new filtered array
console.log(evenNumbers);
/////////////////////////////////////////////////
// Create an array of numbers
 numbers = [1, 2, 3, 4, 5];

// Use reduce() to sum up all elements
let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0); // Initial value is 0

// Print the sum
console.log(sum);
/////////////////////////////////////////////////
// Create an array of strings
let fruits = ["banana", "apple", "orange", "grape", "kiwi"];

// Use sort() to arrange strings alphabetically
fruits.sort();

// Print the sorted array
console.log(fruits);
///////////////////////////////////////////////////
// Create an array of elements
 numbers = [1, 2, 3, 4, 5];

// Use reverse() to reverse the order
numbers.reverse();

// Print the reversed array
console.log(numbers);
////////////////////////////////////////////////////
// Create two arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// Use concat() to combine them
let combinedArray = array1.concat(array2);

// Print the new combined array
console.log(combinedArray);
///////////////////////////////////////////////////
// Create an array
 numbers = [10, 20, 30, 40, 50, 60];

// Use slice() to extract a portion
let extracted = numbers.slice(1, 4); // Extracts elements from index 1 to 3

// Print the extracted portion
console.log(extracted);

// Print the original array (unchanged)
console.log(numbers);
////////////////////////////////////////////////////
 numbers = [10, 20, 30, 40, 50];

// Remove 2 elements starting from index 1
let removed = numbers.splice(1, 2);

console.log(numbers);  // Modified array: [10, 40, 50]
console.log(removed);  // Removed elements: [20, 30]
///////////////////////////////////////////////////
let colors = ["red", "blue", "green"];

// Insert "yellow" & "purple" at index 1
colors.splice(1, 0, "yellow", "purple");

console.log(colors);
//////////////////////////////////////////////////
 fruits = ["apple", "banana", "cherry", "banana", "grape"];

// Find the index of "banana"
let index = fruits.indexOf("banana");

console.log(index);
//////////////////////////////////////////////////
 fruits = ["apple", "banana", "cherry"];

// Join the array with default separator (comma)
let result = fruits.join();

console.log(result);
///////////////////////////////////////////////
let sentence = "JavaScript is awesome";

// Split the sentence by spaces
let words = sentence.split(" ");

console.log(words);
/////////////////////////////////////////////////
 fruits = ["apple", "banana", "cherry"];

// Find the number of elements in the array
let numberOfFruits = fruits.length;

console.log(numberOfFruits);
//////////////////////////////////////////////////
 numbers = [1, 2, 3, 4, 5];

// Use for...of loop to iterate through the array
for (let number of numbers) {
  console.log(number);
}
//////////////////////////////////////////////////
numbers = [10, 20, 30, 40, 50];

// Use for...in loop to iterate through the array indexes
for (let index in numbers) {
  console.log(index);  // Logs the index of each element
}
///////////////////////////////////////////////////
 numbers = [1, 2, 3, 4];
let name = "John Doe";

// Check if 'numbers' is an array
console.log(Array.isArray(numbers));  // true

// Check if 'name' is an array
console.log(Array.isArray(name));     // false
/////////////////////////////////////////////////////
 numbers = Array.of(1, 2, 3, 4, 5);
console.log(numbers);













