// Return a function that expects an array argument and applies f to
// each element, returning the array of return values.
// Contrast this with the map() function from earlier.

const map = function(a, ...args) { return a.map(...args); };

function mapper(f) {
    return a => map(a, f);
}

const increment = x => x+1;
const incrementAll = mapper(increment);
console.log(incrementAll([1,2,3]));  // => [2,3,4]
