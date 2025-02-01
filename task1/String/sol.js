"use strict";
let welcoming="Welcome to Orange";
console.log(welcoming.toLocaleUpperCase());
console.log(welcoming.slice(8,10).toUpperCase());
console.log(welcoming.replace("to","from"));
console.log(welcoming.toLowerCase());
console.log(welcoming.length);
console.log(welcoming.replace("Orange","\"Orange\""));
console.log(welcoming.concat(" Jordan"));
/////////////////////////////////// Q2//////////
function myFuction(myString){
    let modifiedString=myString.slice(1);
    let result=modifiedString.replace((myString.charAt(0)),"*")
    return result;
}
let myString=prompt("enter ur string:");
alert(myFuction(myString));