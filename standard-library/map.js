let m = new Map();   // Start with an empty map.
console.log(m.set({}, 1));        // Map one empty object to the number 1.
console.log(m.set({}, 2));        // Map a different empty object to the number 2.
console.log(m.size);               // => 2: there are two keys in this map
console.log(m.get({}));            // => undefined: but this empty object is not a key
console.log(m.set(m, undefined)); // Map the map itself to the value undefined.
console.log(m.has(m));             // => true: m is a key in itself
console.log(m.get(m));             // => undefined: same value we'd get if m wasn't a key
