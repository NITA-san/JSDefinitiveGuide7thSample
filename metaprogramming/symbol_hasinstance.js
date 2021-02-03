// Define an object as a "type" we can use with instanceof
let uint8 = {
    [Symbol.hasInstance](x) {
        return Number.isInteger(x) && x >= 0 && x <= 255;
    }
};
128 instanceof uint8     // => true
256 instanceof uint8     // => false: too big
Math.PI instanceof uint8 // => false: not an integer

let mine = {
    [Symbol.hasInstance](x) {
        return x.length >= 5;
    }
}

console.log('aaaaa' instanceof mine);
