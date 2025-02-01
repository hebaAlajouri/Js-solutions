"use strict";
function getObjectProperties(obj) {
    
    return Object.keys(obj);  // Use Object.keys() to return an array of the object's properties
}

// Example usage:
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(getObjectProperties(person));  // Output: ["name", "age", "city"]
////////////////////////////////////////////////////////////
function getLength(obj){
    let arr=Object.keys(obj)
    let lengtharr=arr.length;
    return lengtharr;
}
console.log(getLength(person));
///////////////////////////////////////////////////////////////
function mergeObjects(obj1,obj2){
    let obj3=Object.assign(obj1,obj2);
    return obj3;
}
 person = { name: "John", age: 30 };
let address = { city: "New York", country: "USA" };
console.log(mergeObjects(person,address));