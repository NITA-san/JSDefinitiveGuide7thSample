// Make a copy of an array with null elements removed.
let filtered = [1,null,2,3].filter(x => x !== null); // filtered == [1,2,3]
// Square some numbers:
let squares = [1,2,3,4].map(x => x*x);               // squares == [1,4,9,16]

console.log(filtered);
console.log(squares);