Object.defineProperty(Object, "assignDescriptors", {
    // Match the attributes of Object.assign()
    writable: true,
    enumerable: false,
    configurable: true,
    // The function that is the value of the assignDescriptors property.
    value: function(target, ...sources) {
        for(let source of sources) {
            for(let name of Object.getOwnPropertyNames(source)) {
                let desc = Object.getOwnPropertyDescriptor(source, name);
                Object.defineProperty(target, name, desc);
            }

            for(let symbol of Object.getOwnPropertySymbols(source)) {
                let desc = Object.getOwnPropertyDescriptor(source, symbol);
                Object.defineProperty(target, symbol, desc);
            }
        }
        return target;
    }
});

let o = {c: 1, get count() {return this.c++;}}; // Define object with getter
let p = Object.assign({}, o);                   // Copy the property values
let q = Object.assignDescriptors({}, o);        // Copy the property descriptors
console.log(p.count);   // => 1: This is now just a data property so
console.log(p.count);   // => 1: ...the counter does not increment.
console.log(q.count);   // => 2: Incremented once when we copied it the first time,
console.log(q.count);   // => 3: ...but we copied the getter method so it increments.
