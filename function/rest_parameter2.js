function f([x, y, ...coords], ...rest) {
    return [x+y, ...rest, ...coords];  // Note: spread operator here
}
console.log(f([1, 2, 3, 4], 5, 6));   // => [3, 5, 6, 3, 4]
