let o = {x: 1};
let p = {y: 2};
Object.setPrototypeOf(o, p); // Set the prototype of o to p
console.log(o);      // => 2: o now inherits the property y
let a = [1, 2, 3];
Object.setPrototypeOf(a, p); // Set the prototype of array a to p
console.log(a.join);   // => undefined: a no longer has a join() method
console.log(a[2]);   // => undefined: a no longer has a join() method
