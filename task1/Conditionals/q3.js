"use strict";
let statement = prompt("Enter your statement please:");

function camel(statement) {
    let arr = statement.split(" "); // Split the statement into words
    let newArr = []; // Initialize an empty array to store the result
    
    // Iterate over each word and capitalize the first letter, then append the rest
    for (let i = 0; i < arr.length; i++) {
        let capitalizedWord = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
        newArr.push(capitalizedWord); // Push the capitalized word to the new array
    }

    // Join the words back into a single string and remove spaces
    return newArr.join('');
}

let camelCaseStatement = camel(statement);
console.log(camelCaseStatement); // Output the result
