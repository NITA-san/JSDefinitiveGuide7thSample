// Create a sealed object with a frozen prototype and a non-enumerable property
let o = Object.seal(Object.create(Object.freeze({x: 1}), {y: {value: 2, writable: true}}));
console.log(o);