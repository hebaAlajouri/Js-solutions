"use strict";
function switcher(word) {
    let result = ''; // Initialize an empty string to store the result

    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) === word.charAt(i).toUpperCase()) {
            result += word.charAt(i).toLowerCase(); // Convert to lowercase and add to result
        } else {
            result += word.charAt(i).toUpperCase(); // Convert to uppercase and add to result
        }
    }

    document.write(result); // Output the result
}

let word = prompt("Enter your word, please");
switcher(word);
