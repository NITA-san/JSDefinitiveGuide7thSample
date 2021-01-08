'use strict';
let o3 = Object.create(Object.prototype);

let o = { x: "don't change this value" };
//library.function(Object.create(o));  // Guard against accidental modifications

let o2 = Object.create(o);
console.log(o===o2);
console.log(o);
console.log(o2);
console.log(o.x);
console.log(o2.x);
