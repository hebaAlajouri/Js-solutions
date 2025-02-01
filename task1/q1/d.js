"use strict";
function net_income_using_profit(profit,sales){
    let result=profit*sales;
    return result;
}
let profit=parseFloat(prompt("Pls enter the profit:"));
let sales=parseFloat(prompt(" pls enter the sales:"));
console.log(net_income_using_profit(profit,sales));
alert(net_income_using_profit(profit,sales));
