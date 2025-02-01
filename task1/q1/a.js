"use strict";
function cash_flow_ratio(cash,liabilities){
    let result=cash/liabilities;
    return result;
}
//get user input
let cash=parseFloat(prompt("Enter cash amount:"));
let liabilities=parseFloat(prompt("Enter current liabilities:"));
console.log("Cash Flow Ratio:", cash_flow_ratio(cash,liabilities) );
alert("Cash Flow Ratio:"+cash_flow_ratio(cash,liabilities))