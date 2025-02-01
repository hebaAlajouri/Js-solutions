"use strict";
function discountf(price,discount){
    let result=price-(price*discount)/100;
    return result;
}
let price=parseFloat(prompt("Pls enter the price:"));
let discount=parseFloat(prompt(" pls enter the  discount:"));
console.log(discountf(price,discount));
alert(discountf(price,discount));
