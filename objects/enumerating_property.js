let o = {x: 1, y: 2, z: 3};          // Three enumerable own properties
o.propertyIsEnumerable("toString")   // => false: not enumerable
for(let p in o) {                    // Loop through the properties
    console.log(p);                  // Prints x, y, and z, but not toString
    console.log(o[p]);                  // Prints x, y, and z, but not toString
}

let x = Object.create(o);
x.a = 100;

console.log("---------");

for(let p in x) {
    console.log(p);                  // Prints x, y, and z, but not toString
}

console.log("---------");

for(let p in x) {
    if (!x.hasOwnProperty(p)) continue;       // Skip inherited properties
    console.log(p);                  // Prints x, y, and z, but not toString
}
console.log("---------");

for(let p in o) {
    if (typeof o[p] === "function") continue; // Skip all methods
}

console.log(Object.keys(x));
console.log(Object.getOwnPropertyNames(x));
console.log(Reflect.ownKeys(x));
