"use strict";
function fizzBuzzRecursive(num, limit) {
    if (num > limit) return; // Base case: Stop when num exceeds limit

    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }

    fizzBuzzRecursive(num + 1, limit); // Recursive call with incremented number
}

// Start the recursive function from 1 to 100
fizzBuzzRecursive(1, 100);
