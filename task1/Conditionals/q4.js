"use strict";
let arr=["Coding","Academy","By","Orange"];
let newarr;
function removesp(arr,spe){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==spe){
            arr.splice(i,1);
            break;

        }
        else{
            continue;
        }
    }
    return arr;
}
console.log(removesp(arr,"By"));