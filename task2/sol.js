"use strict";
let person={
    name:"Adam",
    age:25,
    gender:"male"

};
console.log(person.name);
console.log(person.age);
console.log(person.gender);
///////////////////////////////////
let person2 = {
    name:"John",
    age:30
};
person2.gender ="male";
console.log(person2);
////////////////////////////////////
let person3={
    name:"John",
    age:30
};
person3["gender"]="male";
console.log(person3);
///////////////////////////////////
let name = person["name"];
let age = person["age"];
let gender = person["gender"];