function* fibonacciSequence() {
    let x = 0, y = 1;
    for(;;) {
        yield y;
        console.log("x="+x+","+"y="+y);
        [x, y] = [y, x+y];  // Note: destructuring assignment
    }
}

// Return the nth Fibonacci number
function fibonacci(n) {
    for(let f of fibonacciSequence()) {
        console.log("f="+f);
        if (n-- <= 0) return f;
    }
}

console.log(fibonacci(20));   // => 10946

