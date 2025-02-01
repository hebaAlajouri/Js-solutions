function findLargest(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// Example Usage:
console.log(findLargest(10, 20)); // Output: 20
console.log(findLargest(50, 30)); // Output: 50
console.log(findLargest(15, 15)); // Output: 15 (both are equal)
