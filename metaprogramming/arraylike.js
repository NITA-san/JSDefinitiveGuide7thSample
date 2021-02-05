let arraylike = {
    length: 1,
    0: 1,
    [Symbol.isConcatSpreadable]: true
};
console.log(arraylike);
console.log([].concat(arraylike));  // => [1]: (would be [[1]] if not spread)
