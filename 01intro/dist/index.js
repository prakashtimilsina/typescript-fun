"use strict";
// console.log("Hello Prakash T.")
//Arrays
let names = ['g', 'h'];
let ages = [45, 40];
names.push("hello");
ages.push(6);
// console.log(names)
// console.log(ages)
let fruits = ['type', "pt", true];
//Object literals
let user1 = {
    name: "Maria",
    age: 30,
    gender: "M"
};
user1.name = "Prakash";
console.log(user1.name);
//type inference with object literals
let person = {
    name: "PT",
    score: 40
};
//functions
function sum1(a, b) {
    return a + b;
}
console.log(sum1(4, 9));
