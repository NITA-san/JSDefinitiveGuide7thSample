// Create a sealed object with a frozen prototype and a non-enumerable property
let q = Object.freeze({x:1});
q.a = 2;
console.log(q);
let p = Object.create(Object.freeze({x: 1}), {y: {value: 2, writable: true}});
console.log(p);
let o = Object.seal(p);
console.log(o.x);
console.log(o.y);
o.x=3;
console.log(o.x);
