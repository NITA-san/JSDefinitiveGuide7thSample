let o = { x: 1 };
console.log("x" in o)         // => true: o has an own property "x"
console.log("y" in o)         // => false: o doesn't have a property "y"
console.log("toString" in o)  // => true: o inherits a toString property

console.log(o.hasOwnProperty("x"))        // => true: o has an own property x
console.log(o.hasOwnProperty("y"))        // => false: o doesn't have a property y
console.log(o.hasOwnProperty("toString")) // => false: toString is an inherited property

console.log(o.propertyIsEnumerable("x"))  // => true: o has an own enumerable property x
console.log(o.propertyIsEnumerable("toString"))  // => false: not an own property
console.log(Object.prototype.propertyIsEnumerable("toString")) // => false: not enumerable


console.log(o.x !== undefined)        // => true: o has a property x
console.log(o.y !== undefined)        // => false: o doesn't have a property y
console.log(o.toString !== undefined) // => true: o inherits a toString property

console.log("----------");
o = { x: undefined };  // Property is explicitly set to undefined
console.log(o.x !== undefined)          // => false: property exists but is undefined
console.log(o.y !== undefined)         // => false: property doesn't even exist
console.log("x" in o)          // => true: the property exists
console.log("y" in o)         // => false: the property doesn't exist
delete o.x;        // Delete the property x
console.log("x" in o)       // => false: it doesn't exist anymore