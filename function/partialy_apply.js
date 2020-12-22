// The arguments to this function are passed on the left
function partialLeft(f, ...outerArgs) {
    return function(...innerArgs) { // Return this function
        let args = [...outerArgs, ...innerArgs]; // Build the argument list
        return f.apply(this, args);              // Then invoke f with it
    };
}

// The arguments to this function are passed on the right
function partialRight(f, ...outerArgs) {
    return function(...innerArgs) {  // Return this function
        let args = [...innerArgs, ...outerArgs]; // Build the argument list
        return f.apply(this, args);              // Then invoke f with it
    };
}

// The arguments to this function serve as a template. Undefined values
// in the argument list are filled in with values from the inner set.
function partial(f, ...outerArgs) {
    return function(...innerArgs) {
        let args = [...outerArgs]; // local copy of outer args template
        let innerIndex=0;          // which inner arg is next
        // Loop through the args, filling in undefined values from inner args
        for(let i = 0; i < args.length; i++) {
            if (args[i] === undefined) args[i] = innerArgs[innerIndex++];
        }
        // Now append any remaining inner arguments
        args.push(...innerArgs.slice(innerIndex));
        return f.apply(this, args);
    };
}

// Here is a function with three arguments
const f = function(x,y,z) { return x * (y - z); };
// Notice how these three partial applications differ
console.log(partialLeft(f, 2)(3,4));         // => -2: Bind first argument: 2 * (3 - 4)
console.log(partialRight(f, 2)(3,4));        // =>  6: Bind last argument: 3 * (4 - 2)
console.log(partial(f, undefined, 2)(3,4));  // => -6: Bind middle argument: 3 * (2 - 4)

console.log("-----------");

console.log(partialLeft((a)=>a,[1,2,3,4])([5,6]));
console.log(partialRight((a)=>a,[1,2,3,4])([5,6]));
console.log(partial((a)=>a,[1,2,3,4])([5,6]));
