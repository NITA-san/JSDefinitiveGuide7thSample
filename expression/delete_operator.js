let o = { x: 1, y: 2}; // Start with an object
delete o.x;            // Delete one of its properties
console.log("x" in o);               // => false: the property does not exist anymore

console.log("-----");

let a = [1,2,3];       // Start with an array
console.log(2 in a); 
console.log(a.length);
delete a[2];           // Delete the last element of the array
console.log(2 in a);                 // => false: array element 2 doesn't exist anymore
console.log(a.length);               // => 3: note that array length doesn't change, though

console.log("-----");

o = {x: 1, y: 2};
console.log(delete o.x);   // Delete one of the object properties; returns true.
console.log(typeof o.x);   // Property does not exist; returns "undefined".
console.log(delete o.x);   // Delete a nonexistent property; returns true.
console.log(delete 1);     // This makes no sense, but it just returns true.
// Can't delete a variable; returns false, or SyntaxError in strict mode.
console.log(delete o);
// Undeletable property: returns false, or TypeError in strict mode.
console.log(delete Object.prototype);