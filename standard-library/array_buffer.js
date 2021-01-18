let bytes = new Uint8Array(1024);            // 1024 bytes
let ints = new Uint32Array(bytes.buffer);    // or 256 integers
let floats = new Float64Array(bytes.buffer); // or 128 doubles

console.log(bytes.byteLength+':'+bytes.length);
console.log(ints.byteLength+':'+ints.length);
console.log(floats.byteLength+':'+floats.length);
