class Buffer {
    constructor() {
        this.size = 0;
        this.capacity = 4096;
        this.buffer = new Uint8Array(this.capacity);
    }
}

class BufferNew {
    size = 0;
    capacity = 4096;
    buffer = new Uint8Array(this.capacity);
    constructor() {}
}

let buf = new Buffer();
console.log(buf.capacity);

let bufNew = new BufferNew();
console.log(bufNew.capacity);

class BufferP {
    #size = 10;
    get size() { return this.#size; }
}

let bufp = new BufferP();
console.log(bufp.size);