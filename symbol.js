let strname = "string name";      // A string to use as a property name
let symname = Symbol("propname"); // A Symbol to use as a property name
typeof strname                    // => "string": strname is a string
typeof symname                    // => "symbol": symname is a symbol
let o = {};                       // Create a new object
o[strname] = 1;                   // Define a property with a string name
o[symname] = 2;                   // Define a property with a Symbol name
o[strname]                        // => 1: access the string-named property
o[symname]                        // => 2: access the symbol-named property

console.log(typeof strname);
console.log(typeof symname);
console.log(o[strname]);
console.log(o[symname]);
console.log(o[Symbol("propname")]);

console.log("--------");
let a = Symbol("a");
let b = Symbol("a");
console.log(a===b);
console.log(a.toString());
console.log(b.toString());
console.log(a.toString()===Symbol(b.toString()));
console.log("--------");

//let s = Symbol("sym_x");
//console.log(s.toString());             // => "Symbol(sym_x)"

let s = Symbol.for("shared");
let t = Symbol.for("shared");
console.log(s === t);          // => true
console.log(s.toString());     // => "Symbol(shared)"
console.log(Symbol.keyFor(t)); // => "shared"