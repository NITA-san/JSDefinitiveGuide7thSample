let a = ["a","b","c"];              // An array we want to copy
let b = [];                         // A distinct array we'll copy into
for(let i = 0; i < a.length; i++) { // For each index of a[]
    b[i] = a[i];                    // Copy an element of a into b
}
let c = Array.from(b);
console.log(c[2]);

console.log(10 + " objects");     // => "10 objects":  Number 10 converts to a string
console.log("7" * "4");           // => 28: both strings convert to numbers
let n = 1 - "x";    // n == NaN; string "x" can't convert to a number
console.log(n + " objects");      // => "NaN objects": NaN converts to string "NaN"

console.log(undefined == null);