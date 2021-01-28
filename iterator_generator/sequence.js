function* sequence(...iterables) {
    for(let iterable of iterables) {
        for(let item of iterable) {
            yield item;
        }
    }
}
function* oneDigitPrimes() { // Invoking this function does not run the code
    yield 2;                 // but just returns a generator object. Calling
    yield 3;                 // the next() method of that generator runs
    yield 5;                 // the code until a yield statement provides
    yield 7;                 // the return value for the next() method.
}

console.log([...sequence("abc",oneDigitPrimes())]);  // => ["a","b","c",2,3,5,7]

function* sequence2(...iterables) {
    for(let iterable of iterables) {
        yield* iterable;
    }
}

console.log([...sequence2("abc",oneDigitPrimes())]);  // => ["a","b","c",2,3,5,7]