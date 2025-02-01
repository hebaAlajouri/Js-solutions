function isNumber(value) {
    return typeof value === 'number';
}

// Example Usage:
console.log(isNumber(42));       // true
console.log(isNumber("42"));     // false
console.log(isNumber(NaN));      // true (special case, NaN is still of type 'number')
console.log(isNumber(null));     // false
console.log(isNumber(undefined)); // false
