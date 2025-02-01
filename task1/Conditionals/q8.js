"use strict";
function checkTriangleType(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return "Invalid triangle sides";
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Not a valid triangle";
    }

    if (a === b && b === c) {
        return "Equilateral Triangle";
    } else if (a === b || a === c || b === c) {
        return "Isosceles Triangle";
    } else {
        return "Scalene Triangle";
    }
}

// Example Usage:
console.log(checkTriangleType(5, 5, 5));  
console.log(checkTriangleType(5, 5, 3)); 
console.log(checkTriangleType(3, 4, 5));  
console.log(checkTriangleType(1, 2, 3)); 
