let arraylike = {
    length: 1,
    0: 1,
    [Symbol.isConcatSpreadable]: true
};
console.log(arraylike);
console.log([].concat(arraylike));  // => [1]: (would be [[1]] if not spread)

class NonSpreadableArray extends Array {
    get [Symbol.isConcatSpreadable]() { return false; }
}
let a = new NonSpreadableArray(1,2,3);
console.log([].concat(a).length); // => 1; (would be 3 elements long if a was spread)
