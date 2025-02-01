"use strict";
let total = 57;
let banknotes = [25, 10, 5, 1];
let result = [];

for (let i = 0; i < banknotes.length; i++) {
    while (total >= banknotes[i]) {
        result.push(banknotes[i]);  // Add the banknote to the result array
        total -= banknotes[i];       // Subtract the banknote from the total
    }
}

console.log(result); // Output: [25, 25, 5, 1, 1]
