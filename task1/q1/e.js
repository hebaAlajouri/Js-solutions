"use strict";
function average(num1,num2,num3){
    let result=(num1+num2+num3)/3;
    return result;
}
let num1=parseFloat(prompt("Pls enter the first number:"));
let num2=parseFloat(prompt(" pls enter the second number:"));
let num3=parseFloat(prompt(" pls enter the third number:"));
console.log(average(num1,num2,num3));
alert(average(num1,num2,num3));
