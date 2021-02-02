let p = {z: 3};
let o = {
    x: 1,
    y: 2,
    __proto__: p
};
console.log(o.z);  // => 3: o inherits from p

let q = {}
Object.setPrototypeOf(q, o);
console.log(q.z);