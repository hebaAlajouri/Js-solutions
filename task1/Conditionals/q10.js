"use strict";
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;  // Leap year
    } else {
        return false; // Not a leap year
    }
}

// Example Usage:
console.log(isLeapYear(2024)); // Output: true  (Leap year)
console.log(isLeapYear(2023)); // Output: false (Not a leap year)
console.log(isLeapYear(2000)); // Output: true  (Leap year)
console.log(isLeapYear(1900)); // Output: false (Not a leap year)
console.log(isLeapYear(1600)); // Output: true  (Leap year)
