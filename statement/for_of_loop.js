let data = [1, 2, 3, 4, 5, 6, 7, 8, 9], sum = 0;
for(let element of data) {
    sum += element;
}
console.log(sum);       // => 45

let o = { x: 1, y: 2, z: 3 };
let keys = "";
for(let k of Object.keys(o)) {
    keys += k;
}
console.log(keys);  // => "xyz"
console.log(typeof Object.keys(o));

let pairs = "";
for(let [k, v] of Object.entries(o)) {
    pairs += k + v;
}
console.log(pairs);  // => "x1y2z3"

let text = "Na na na na na na na na Batman!";
let wordSet = new Set(text.split(" "));
let unique = [];
for(let word of wordSet) {
    unique.push(word);
}
console.log(unique); // => ["Na", "na", "Batman!"]

let m = new Map([[1, "one"]]);
for(let [key, value] of m) {
    console.log(key);    // => 1
    console.log(value);  // => "one"
}

// Read chunks from an asynchronously iterable stream and print them out
async function printStream(stream) {
    for await (let chunk of stream) {
        console.log(chunk);
    }
}