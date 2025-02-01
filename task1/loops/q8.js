"use strict";
function countCharacter(str, char) {
    let lowerStr = str.toLowerCase();  // Convert the string to lowercase
    let lowerChar = char.toLowerCase(); // Convert the character to lowercase
    let count = 0;

    for (let i = 0; i < lowerStr.length; i++) {
        if (lowerStr[i] === lowerChar) {
            count++;
        }
    }
    
    return count;
}

// Example Usage:
console.log(countCharacter("Coding Academy by Orange", "o")); // Output: 2
console.log(countCharacter("Hello World", "l")); // Output: 3
console.log(countCharacter("JavaScript", "J")); // Output: 1
console.log(countCharacter("CASE insensitive", "e")); // Output: 2
