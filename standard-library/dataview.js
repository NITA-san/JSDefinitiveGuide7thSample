let bytes = new Uint32Array(8);

// Assume we have a typed array of bytes of binary data to process. First,
// we create a DataView object so we can flexibly read and write
// values from those bytes
let view = new DataView(bytes.buffer,
    bytes.byteOffset,
    bytes.byteLength);

bytes[0]=1;
let int = view.getInt32(0);     // Read big-endian signed int from byte 0
console.log(bytes.buffer);
console.log(int);
bytes[1]=1;
int = view.getInt32(4, false);  // Next int is also big-endian
console.log(bytes.buffer);
console.log(int);
bytes[2]=1;
int = view.getUint32(8, true);  // Next int is little-endian and unsigned
console.log(bytes.buffer);
console.log(int);
view.setUint32(8, int, false);  // Write it back in big-endian format
console.log(bytes.buffer);
console.log(int);
