i = j = 1;
k = 2;
if (i === j)
    if (j === k)
        console.log("i equals k");
else
    console.log("i doesn't equal j");    // WRONG!!

if (i === j) {
    if (j === k)
        console.log("i equals k");
    else
        console.log("i doesn't equal j");    // OOPS!
}

if (i === j) {
    if (j === k) {
        console.log("i equals k");
    }
} else {  // What a difference the location of a curly brace makes!
    console.log("i doesn't equal j");
}