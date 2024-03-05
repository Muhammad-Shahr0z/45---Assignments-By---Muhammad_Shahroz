// Tests for equality and inequality with strings
const string1: string = "hello";
const string2: string = "world";

console.log("Equality test:", string1 === string2); // False
console.log("Inequality test:", string1 !== string2); // True

// Tests using the lower case function
const string3: string = "HELLO";
const string4: string = "hello";

console.log("Lowercase equality test:", string3.toLowerCase() === string4.toLowerCase()); // True

// Numerical tests
const num1: number = 5;
const num2: number = 10;

console.log("Equality test:", num1 === num2); // False
console.log("Inequality test:", num1 !== num2); // True
console.log("Greater than test:", num2 > num1); // True
console.log("Less than test:", num1 < num2); // True
console.log("Greater than or equal to test:", num2 >= num1); // True
console.log("Less than or equal to test:", num1 <= num2); // True

// Tests using "and" and "or" operators
const isTrue: boolean = true;
const isFalse: boolean = false;

console.log("And operator test:", isTrue && isFalse); // False
console.log("Or operator test:", isTrue || isFalse); // True

// Test whether an item is in an array
const array: number[] = [1, 2, 3, 4, 5];
const item1: number = 3;
const item2: number = 6;

console.log("Item in array test:", array.includes(item1)); // True
console.log("Item not in array test:", array.includes(item2)); // False
