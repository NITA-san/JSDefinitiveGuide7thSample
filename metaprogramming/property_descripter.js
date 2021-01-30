// Returns {value: 1, writable:true, enumerable:true, configurable:true}
let o = Object.getOwnPropertyDescriptor({x: 1}, "x");
console.log(o);
// Here is an object with a read-only accessor property
const random = {
    get octet() { return Math.floor(Math.random()*256); },
    // set octet(a) {},
};

// Returns { get: /*func*/, set:undefined, enumerable:true, configurable:true}
let or = Object.getOwnPropertyDescriptor(random, "octet");
console.log(or);

// Returns undefined for inherited properties and properties that don't exist.
console.log(Object.getOwnPropertyDescriptor({}, "x"));        // => undefined; no such prop
console.log(Object.getOwnPropertyDescriptor({}, "toString")); // => undefined; inherited
