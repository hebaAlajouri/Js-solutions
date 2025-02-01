"use strict";
function check(num){
    if(num%2==0){
        console.log("even");

    }
    else{
        console.log("odd");
    }
}
let num=parseInt(prompt("enter the number"));
check(num);