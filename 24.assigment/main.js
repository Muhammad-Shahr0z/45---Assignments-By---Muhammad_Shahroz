"use strict";
// Tests for equality and inequality with strings
const string1 = "hello";
const string2 = "world";
console.log("Equality test:", string1 === string2); // False
console.log("Inequality test:", string1 !== string2); // True
// Tests using the lower case function
const string3 = "HELLO";
const string4 = "hello";
console.log("Lowercase equality test:", string3.toLowerCase() === string4.toLowerCase()); // True
// Numerical tests
const num1 = 5;
const num2 = 10;
console.log("Equality test:", num1 === num2); // False
console.log("Inequality test:", num1 !== num2); // True
console.log("Greater than test:", num2 > num1); // True
console.log("Less than test:", num1 < num2); // True
console.log("Greater than or equal to test:", num2 >= num1); // True
console.log("Less than or equal to test:", num1 <= num2); // True
// Tests using "and" and "or" operators
const isTrue = true;
const isFalse = false;
console.log("And operator test:", isTrue && isFalse); // False
console.log("Or operator test:", isTrue || isFalse); // True
// Test whether an item is in an array
const array = [1, 2, 3, 4, 5];
const item1 = 3;
const item2 = 6;
console.log("Item in array test:", array.includes(item1)); // True
console.log("Item not in array test:", array.includes(item2)); // False
