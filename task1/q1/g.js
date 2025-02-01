"use strict";
function age_limit(age){
    if(age>18 || age<30){
        return true;

    }
    else{
        return false;
    }
 
}
let age=parseInt(prompt("Pls enter ur age:"));

console.log( age_limit(age));
alert( age_limit(age));
