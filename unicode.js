const café = 1;  // This constant is named "caf\u{e9}"
const café = 2;  // This constant is different: "cafe\u{301}"
café  // => 1: this constant has one value
café  // => 2: this indistinguishable constant has a different value

console.log(café)
console.log(café)

console.log(0xBADCAFE)
console.log(0b10101)
console.log(0o377)
console.log(6.02e3)

let fraction = 0.123_456_789;
console.log(fraction);
console.log(Math.E);

console.log(Infinity / 0);
console.log(-1 / Infinity)
console.log(Math.sqrt(-1))

let a = 2
console.log(Number.isFinite(2))

let x = .3 - .2;    // thirty cents minus 20 cents
let y = .2 - .1;    // twenty cents minus 10 cents
console.log(x === y)             // => false: the two values are not the same!
console.log(x === .1)            // => false: .3-.2 is not equal to .1
console.log(y === .1)            // => true: .2-.1 is equal to .1

let love = "\ud83d\udc99";
console.log(love + '->' + love.length)   // => 2: UTF-16 encoding of ❤ is "\ud83d\udc99"
console.log("💙".normalize())
console.log("\u{1f611}" + "->" + "\u{1f611}".length)

let filename = "test";
let linenumber = "number";
let errorMessage = `\
\u2718 Test failure at ${filename}:${linenumber}:
Stack trace:
`;
console.log(errorMessage);

`\n`.length            // => 1: the string has a single newline character
String.raw`\n`.length  // => 2: a backslash character and the letter n

console.log(`\n`.length);
console.log("\n".length);
console.log(String.raw`\n`.length)
console.log(`A man is standing.\n`.length)
