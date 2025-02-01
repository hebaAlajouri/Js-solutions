"use strict";
let numbers = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
let evens = [];
let odds = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evens.push(numbers[i]);  // Push even number to evens array
    } else {
        odds.push(numbers[i]);   // Push odd number to odds array
    }
}

console.log("Even numbers:", evens);
console.log("Odd numbers:", odds);
