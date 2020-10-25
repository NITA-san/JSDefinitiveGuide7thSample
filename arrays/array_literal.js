let base = 1024;
let table = [base, base + 1, base + 2, base + 3];

console.log(table);

let count = [1,, 3]; // Elements at indexes 0 and 2. No element at index 1
let undefs = [, ,];  // An array with no elements but a length of 2

console.log(count + ":" + count.length);
console.log(undefs + ":" + undefs.length);