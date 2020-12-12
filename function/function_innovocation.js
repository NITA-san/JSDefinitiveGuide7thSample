//"use strict"
//printprops({x: 1});
//let total = distance(0,0,2,1) + distance(2,1,3,5);
//let probability = factorial(5)/factorial(13);

const f = (x) => 2 * x;
const x = 4;
console.log((f !== null && f !== undefined) ? f(x) : undefined);

// Define and invoke a function to determine if we're in strict mode.
const strict = (function() { 
    console.log(this);
    return !this; 
}());
console.log(strict);
