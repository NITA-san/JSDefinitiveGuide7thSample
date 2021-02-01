console.log(Object.getPrototypeOf({}));      // => Object.prototype
console.log(Object.getPrototypeOf([]));      // => Array.prototype
console.log(Object.getPrototypeOf(()=>{}));  // => Function.prototype

let p = {x: 1};                   // Define a prototype object.
let o = Object.create(p);         // Create an object with that prototype.
console.log(p.isPrototypeOf(o));                // => true: o inherits from p
console.log(Object.prototype.isPrototypeOf(p)); // => true: p inherits from Object.prototype
console.log(Object.prototype.isPrototypeOf(o)); // => true: o does too

let q = [1,2];
console.log(Array.prototype.isPrototypeOf(q));