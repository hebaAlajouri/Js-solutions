"use strict";
function remainder(num1,num2){
    let result=num1%num2;
    return result;
}
let num1=parseInt(prompt("enter the first num:"));
let num2=parseInt(prompt("enter the second number:"));
console.log(remainder(num1,num2));
alert(remainder(num1,num2));