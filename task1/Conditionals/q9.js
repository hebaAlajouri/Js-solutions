"use strict";
function isNumberInRange(num, start, end) {
    return num >= start && num <= end;
}

// Example Usage:
console.log(isNumberInRange(10, 5, 15));  
console.log(isNumberInRange(20, 5, 15));  
console.log(isNumberInRange(5, 5, 15));  
console.log(isNumberInRange(15, 5, 15));  
console.log(isNumberInRange(-3, -5, 0)); 
