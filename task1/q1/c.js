"use strict";
function total_assets(liabilities,equity){
    let result=liabilities+equity;
    return result;
}
let liabilities=parseFloat(prompt("Pls enter the liabilities:"));
let equity=parseFloat(prompt(" pls enter the equity:"));
console.log(total_assets(liabilities,equity));
alert(total_assets(liabilities,equity));
