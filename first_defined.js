
let maxWidth;
let preferences = {};
//let max = maxWidth || preferences.maxWidth || 500;
let max = maxWidth ?? preferences.maxWidth ?? 500;

console.log(max);

let options = { timeout: 0, title: "", verbose: false, n: null };
console.log(options.timeout ?? 1000)     // => 0: as defined in the object
console.log(options.title ?? "Untitled") // => "": as defined in the object
console.log(options.verbose ?? true)     // => false: as defined in the object
console.log(options.quiet ?? false)      // => false: property is not defined
console.log(options.n ?? 10)             // => 10: property is null

console.log("-------");

console.log((a ?? b) || c)   // ?? first, then ||
console.log(a ?? (b || c))   // || first, then ??
//console.log(a ?? b || c)     // SyntaxError: parentheses are required
