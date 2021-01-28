function *oneAndDone() {
    yield 1;
    return "done";
}

// The return value does not appear in normal iteration.
console.log([...oneAndDone()]);   // => [1]

// But it is available if you explicitly call next()
let generator = oneAndDone();
console.log(generator.next());           // => { value: 1, done: false}
console.log(generator.next());           // => { value: "done", done: true }
// If the generator is already done, the return value is not returned again
console.log(generator.next());           // => { value: undefined, done: true }
