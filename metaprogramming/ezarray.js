// A trivial Array subclass that adds getters for the first and last elements.
class EZArray extends Array {
    get first() { return this[0]; }
    get last() { return this[this.length-1]; }
}

let e = new EZArray(1,2,3);
let f = e.map(x => x * x);
console.log(e.last);  // => 3: the last element of EZArray e
console.log(f.last);  // => 9: f is also an EZArray with a last property

class EZArraySpecies extends Array {
    static get [Symbol.species]() { return Array; }
    get first() { return this[0]; }
    get last() { return this[this.length-1]; }
}

e = new EZArraySpecies(1,2,3);
f = e.map(x => x - 1);
console.log(e);
console.log(e.last);  // => 3
console.log(f.last);  // => undefined: f is a regular array with no last getter
