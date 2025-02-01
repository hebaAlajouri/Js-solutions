"use strict";
let i = 1;  // Initialize the variable to start from 1

while (i <= 10) {  // Continue the loop while i is less than or equal to 10
  console.log(i);  // Print the current value of i
  i++;  // Increment i by 1 in each iteration
}
/////////////////////////////////////////////////////////////////////////////
let array = [10, 20, 30, 40, 50];  // Example array

for (let i = 0; i < array.length; i++) {  // Loop from the first index (0) to the last index of the array
  console.log(array[i]);  // Print the current element at index i
}
/////////////////////////////////////////////////////////////////////////////
for (let i = 0; i <= 10; i++) {  // Loop from 0 to 10
    if (i % 2 === 0) {  // Check if the number is even
      console.log(i);  // Print the even number
    }
  }
/////////////////////////////////////////////////////////////////////////////
let sum = 0;  // Initialize a variable to hold the sum

for (let i = 1; i <= 10; i++) {  // Loop from 1 to 10
  sum += i;  // Add the current value of i to sum
}

console.log(sum);  // Print the total sum after the loop finishes
//////////////////////////////////////////////////////////////////////////////
let array = [10, 5, 8, 20, 15];  // Example array
let largest = array[0];  // Initialize largest with the first element

for (let i = 1; i < array.length; i++) {  // Start loop from the second element
  if (array[i] > largest) {  // If the current element is greater than the largest
    largest = array[i];  // Update the largest value
  }
}

console.log(largest);  // Print the largest number
/////////////////////////////////////////////////////////////////////////////
/*let array = [10, 20, 30, 40, 50];  // Example array
let sum = 0;  // Initialize a variable to hold the sum

for (let i = 0; i < array.length; i++) {  // Loop through each element in the array
  sum += array[i];  // Add the current number to the sum
}

let average = sum / array.length;  // Calculate the average
console.log(average);  // Print the average*/
/////////////////////////////////////////////////////////////////////////////////
let number = 5;  // Example number
let factorial = 1;  // Initialize factorial as 1 (since factorial of 0 is 1)

for (let i = 1; i <= number; i++) {  // Loop from 1 to the given number
  factorial *= i;  // Multiply factorial by the current number (i)
}

console.log(factorial);  // Print the factorial
//////////////////////////////////////////////////////////////////////////////////
let n = 10;  // Example: Print Fibonacci sequence up to the 10th number
let a = 0, b = 1;

console.log(a);  // Print the first Fibonacci number
for (let i = 1; i < n; i++) {
  let next = a + b;  // Calculate the next Fibonacci number
  console.log(next);  // Print the next Fibonacci number
  a = b;  // Update 'a' to the previous number
  b = next;  // Update 'b' to the current number
}
//////////////////////////////////////////////////////////////////////////////////
/*let n = 20;  // Example: Print prime numbers up to 20

for (let i = 2; i <= n; i++) {  // Loop through numbers from 2 to n
  let isPrime = true;  // Assume the current number is prime
  for (let j = 2; j <= Math.sqrt(i); j++) {  // Check divisibility from 2 up to sqrt(i)
    if (i % j === 0) {  // If divisible, it's not prime
      isPrime = false;
      break;  // No need to check further
    }
  }
  if (isPrime) {
    console.log(i);  // Print the prime number
  }
}*/
//////////////////////////////////////////////////////////////////////////////////////
let array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Outer loop for rows
  for (let i = 0; i < array2D.length; i++) {
    // Inner loop for columns
    for (let j = 0; j < array2D[i].length; j++) {
      console.log(array2D[i][j]);  // Print each element
    }
  }
////////////////////////////////////////////////////////////////////////////////////////
/*let array = [10, 20, 30, 40, 50];

// Start from the last index and iterate backwards
for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);  // Print each element in reverse order
}*/
/////////////////////////////////////////////////////////////////////////////////////////
/*let array = [10, 20, 30, 40, 50, 60, 70];

// Print elements with a step of 2
for (let i = 0; i < array.length; i += 2) {
  console.log(array[i]);  // Print every 2nd element
}*/
/////////////////////////////////////////////////////////////////////////////////////////
/*let array = [10, 20, 30, 20, 40, 20, 50];
let numberToFind = 20;
let frequency = 0;

// Loop through the array
for (let i = 0; i < array.length; i++) {
  if (array[i] === numberToFind) {
    frequency++;  // Increment the frequency count
  }
}

console.log(`The number ${numberToFind} appears ${frequency} times in the array.`);*/
//////////////////////////////////////////////////////////////////////////////////////////////
let heros = [
    { name: 'Spider-Man', power: 'Web-slinging' },
    { name: 'Iron Man', power: 'Technology' },
    { name: 'Thor', power: 'God of Thunder' },
  ];
  
  // Create a new array with the transformations
  let newHeros = heros.map((hero, index) => {
    return {
      hero: hero.name,  // Rename 'name' to 'hero'
      power: hero.power,  // Keep the 'power' key as is
      id: index  // Add 'id' based on the index
    };
  });
  
  console.log(newHeros);
/////////////////////////////////////////////////////////////////////////////////////////////
function filterLongWords(inputWords) {
    // Use filter to return only words with more than 7 characters
    return inputWords.filter(word => word.length > 7);
  }
  
  // Sample array of words
  let words = ['apple', 'banana', 'strawberry', 'grape', 'watermelon', 'kiwi'];
  
  let longWords = filterLongWords(words);
  console.log(longWords);
///////////////////////////////////////////////////////////////////////////////////////////////
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use reduce to sum the squares of numbers divisible by 5
let sumOfSquares = numbers.reduce((acc, num) => {
  // Check if the number is divisible by 5
  if (num % 5 === 0) {
    // Add the square of the number to the accumulator
    return acc + num * num;
  }
  return acc;
}, 0); // Initial value of the accumulator is 0

console.log(sumOfSquares);
///////////////////////////////////////////////////////////////////////////////////////////////////
/*let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use reduce to sum the squares of numbers divisible by 5
let sumOfSquares = numbers.reduce((acc, num) => {
  // Check if the number is divisible by 5
  if (num % 5 === 0) {
    // Add the square of the number to the accumulator
    return acc + num * num;
  }
  return acc;
}, 0); // Initial value of the accumulator is 0

console.log(sumOfSquares);*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////





