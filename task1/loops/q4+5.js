"use strict";
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz"); // Divisible by both 3 and 5
    } else if (i % 3 === 0) {
        console.log("Fizz"); // Divisible by 3
    } else if (i % 5 === 0) {
        console.log("Buzz"); // Divisible by 5
    } else {
        console.log(i); // Not divisible by 3 or 5
    }
}
/////////////////////////q5/////////////
function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}

// Loop from 1 to 100 and call fizzBuzz() for each number
for (let i = 1; i <= 100; i++) {
    fizzBuzz(i);
}
