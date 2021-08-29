"use strict";

/* 1. declare 3 variables */
let a = "y";
let b = "x";
let temp;

/* 2. swap the values between a and b
  this can be done with 3 assignments
*/
temp = b;
b = a;
a = temp;

/* 3. compare the final values
  all the comparisons should be true
*/
console.log(a === "x"); // true
console.log(b === "y"); // true
console.log(temp === "x"); // true
