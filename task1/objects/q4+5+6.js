"use strict";
function convertValuesToUppercase(obj) {
    // Create an empty object to hold the new properties
    let uppercasedObj = {};

    // Iterate over the properties of the input object using a for...in loop
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {  // Ensure the property belongs to the object itself, not its prototype
            // Convert the value of the property to uppercase and assign it to the new object
            uppercasedObj[key] = obj[key].toUpperCase();
        }
    }

    // Return the new object with uppercase values
    return uppercasedObj;
}

// Example usage:
let person = {
    name: "John",
    city: "New York",
    job: "developer"
};

let uppercasedPerson = convertValuesToUppercase(person);
console.log(uppercasedPerson);
// Output: { name: "JOHN", city: "NEW YORK", job: "DEVELOPER" }
///////////////////////////////////////////////////////////////////////////
function removeNullProperties(obj) {
    // Create a new empty object to store properties with non-null values
    let newObj = {};

    // Iterate over the properties of the input object using a for...in loop
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {  // Ensure it's a property of the object, not from the prototype chain
            // If the value is not null, add the property to the new object
            if (obj[key] !== null) {
                newObj[key] = obj[key];
            }
        }
    }

    // Return the new object containing only properties with non-null values
    return newObj;
}

// Example usage:
 person = {
    name: "John",
    age: null,
    city: "New York",
    job: null
};

let filteredPerson = removeNullProperties(person);
console.log(filteredPerson);
// Output: { name: "John", city: "New York" }
/////////////////////////////////////////////////////////////////////////
function getSortedPropertyNames(obj) {
    // Use Object.keys() to get an array of the object's property names
    let keys = Object.keys(obj);

    // Use Array.sort() to sort the property names alphabetically
    keys.sort();

    // Return the sorted array of property names
    return keys;
}

// Example usage:
 person = {
    name: "John",
    age: 30,
    city: "New York",
    job: "developer"
};

let sortedProperties = getSortedPropertyNames(person);
console.log(sortedProperties);
// Output: ["age", "city", "job", "name"]

