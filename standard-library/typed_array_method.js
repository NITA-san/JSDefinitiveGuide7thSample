let bytes = new Uint8Array(1024);        // A 1K buffer
let pattern = new Uint8Array([0,1,2,3]); // An array of 4 bytes
bytes.set(pattern);      // Copy them to the start of another byte array
console.log(bytes);
bytes.set(pattern, 4);   // Copy them again at a different offset
console.log(bytes);
bytes.set([0,1,2,4], 8); // Or just copy values direct from a regular array
console.log(bytes);
let b = bytes.slice(0, 11)       // => new Uint8Array([0,1,2,3,0,1,2,3,0,1,2,3])
console.log(b);

