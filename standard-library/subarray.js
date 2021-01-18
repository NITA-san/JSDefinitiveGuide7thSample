let ints = new Int16Array([0,1,2,3,4,5,6,7,8,9]);       // 10 short integers
let last3 = ints.subarray(ints.length-3, ints.length);  // Last 3 of them
console.log(last3[0]);       // => 7: this is the same as ints[7]
console.log(last3);

ints[9] = -1;  // Change a value in the original array and...
console.log(last3[2]);       // => 7: this is the same as ints[7]
console.log(last3);

console.log('-----------');

console.log(last3.buffer);                 // The ArrayBuffer object for a typed array
console.log(last3.buffer === ints.buffer); // => true: both are views of the same buffer
console.log(last3.byteOffset);             // => 14: this view starts at byte 14 of the buffer
console.log(ints.byteOffset);             // => 14: this view starts at byte 14 of the buffer
console.log(last3.byteLength);             // => 6: this view is 6 bytes (3 16-bit ints) long
console.log(ints.byteLength);             // => 6: this view is 6 bytes (3 16-bit ints) long
console.log(last3.buffer.byteLength);      // => 20: but the underlying buffer has 20 bytes

console.log('-----------');

let a = new Int32Array([1,2]);
console.log(a.length * a.BYTES_PER_ELEMENT === a.byteLength);  // => true
console.log(a.length);
console.log(a.BYTES_PER_ELEMENT);

console.log('-----------');

let bytes = new Uint8Array(8);
bytes[0] = 1;           // Set the first byte to 1
console.log(bytes.buffer[0]);         // => undefined: buffer doesn't have index 0
console.log(bytes.buffer[1] = 255);  // Try incorrectly to set a byte in the buffer
console.log(bytes.buffer[1]);         // => 255: this just sets a regular JS property
console.log(bytes[1]);                // => 0: the line above did not set the byte
console.log(bytes);
console.log(bytes.buffer);
