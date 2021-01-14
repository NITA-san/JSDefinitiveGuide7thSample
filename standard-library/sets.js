let s = new Set();       // A new, empty set
let t = new Set([1, s]); // A new set with two members

console.log(s);
console.log(t);

let u = new Set(t);                  // A new set that copies the elements of s.
let unique = new Set("Mississippi"); // 4 elements: "M", "i", "s", and "p"

console.log(u);
console.log(unique);

let a = new Set();
console.log(a.add([1,2]));
console.log(a.add([1,2]));
console.log(a.delete([1,2]));

console.log('------');


let oneDigitPrimes = new Set([2,3,5,7]);
console.log(oneDigitPrimes.has(2));    // => true: 2 is a one-digit prime number
console.log(oneDigitPrimes.has(3));    // => true: so is 3
console.log(oneDigitPrimes.has(4));    // => false: 4 is not a prime
console.log(oneDigitPrimes.has("5"));  // => false: "5" is not even a number

let sum = 0;
for(let p of oneDigitPrimes) { // Loop through the one-digit primes
    sum += p;                  // and add them up
}
console.log(sum);                            // => 17: 2 + 3 + 5 + 7