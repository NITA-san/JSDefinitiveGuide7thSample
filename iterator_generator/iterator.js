let sum = 0;
for(let i of [1,2,3]) { // Loop once for each of these values
    sum += i;
}
console.log(sum);   // => 6

let chars = [..."abcd"]; // chars == ["a", "b", "c", "d"]
let data = [1, 2, 3, 4, 5];
console.log(Math.max(...data));        // => 5

let purpleHaze = Uint8Array.of(255, 0, 255, 128);
let [r, g, b, a] = purpleHaze; // a == 128
console.log(a);

let m = new Map([["one", 1], ["two", 2]]);
for(let [k,v] of m) console.log(k, v); // Logs 'one 1' and 'two 2'

[...m];            // => [["one", 1], ["two", 2]]: default iteration
[...m.entries()];  // => [["one", 1], ["two", 2]]: entries() method is the same
[...m.keys()];     // => ["one", "two"]: keys() method iterates just map keys
[...m.values()];   // => [1, 2]: values() method iterates just map values