"use strict";
function net_income(revenues,expenses){
    let result=revenues-expenses;
    return result;
}
let revenues=parseFloat(prompt("Pls enter the revenues:"));
let expenses=parseFloat(prompt(" pls enter the expenses:"));
console.log(net_income(revenues,expenses));
alert(net_income(revenues,expenses));
