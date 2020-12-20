function f(y) { return this.x + y; } // This function needs to be bound
let o = { x: 1 };                    // An object we'll bind to
let g = f.bind(o);                   // Calling g(x) invokes f() on o
console.log(g(2));                                 // => 3
let p = { x: 10, g };                // Invoke g() as a method of this object
g = f.bind({x: 100})
console.log(g(2));                                 // => 3
console.log(p.g(2));                               // => 3: g is still bound to o, not p.
