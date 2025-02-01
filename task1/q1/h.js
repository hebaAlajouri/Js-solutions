"use strict";
function exponential(num,pow){
    let result=num**pow;
    return result;
}
let num=parseInt(prompt("Enter the number:"));
let pow=parseInt(prompt("enter the power:"));
console.log(exponential(num,pow));
alert(exponential(num,pow));