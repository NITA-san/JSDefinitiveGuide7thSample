let n = 17;
let binary = "0b" + n.toString(2);  // binary == "0b10001"
let octal = "0o" + n.toString(8);   // octal == "0o21"
let hex = "0x" + n.toString(16);    // hex == "0x11"

console.log(binary);
console.log(n.toString(2));

let d = new Date(2020,0,1);
console.log(d.toString());  // => "Wed Jan 01 2020 00:00:00 GMT-0800 (Pacific Standard Time)"

console.log(d.valueOf());

console.log(Number([]));    // => 0: this is unexpected!
console.log(Number([99]));  // => 99: really?