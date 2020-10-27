let a = [1, 2, 3];
console.log(a.map(x => x * x));

console.log(a);

a = [5, 4, 3, 2, 1];
console.log(a.filter(x => x < 3));         // => [2, 1]; values less than 3
console.log(a.filter((x, i) => i % 2 === 0)); // => [5, 3, 1]; every other value

a = [1, 2, 3, 4, 5];
console.log(a.reduce((x, y) => x + y, 0));          // => 15; the sum of the values
console.log(a.reduce((x, y) => x * y, 1));          // => 120; the product of the values
console.log(a.reduce((x, y) => (x > y) ? x : y)); // => 5; the largest of the values

a = [1, ,]
console.log(a.reduce((x, y) => 0));
console.log(a.length);
a.forEach((x, i) => { console.log("a[" + i + "]->" + x); });

console.log("----------");

let phrases = ["hello world", "the definitive guide"];
let words = phrases.flatMap(phrase => phrase.split(" "));
console.log(words); // => ["hello", "world", "the", "definitive", "guide"];

words = phrases.map(phrase => phrase.split(" ").flat());
console.log(words); // => ["hello", "world", "the", "definitive", "guide"];

a = [-2, -1, 1, 2].flatMap(x => x < 0 ? [] : Math.sqrt(x)) // => [1, 2**0.5]
console.log(a);

a = [-2, -1, 1, 2].map(x => x < 0 ? undefined : Math.sqrt(x)).filter(x => x !== undefined); // => [1, 2**0.5]
console.log(a);

console.log("----------");

a =[1,2]
console.log(a.unshift(100,200));
console.log(a);

a =[1,2]
console.log(a.shift());
console.log(a);

console.log("----------");

a = [1,2,3,4,5];
console.log(a.slice(0,3));    // Returns [1,2,3]
console.log(a.slice(3));      // Returns [4,5]
console.log(a.slice(1,-1));   // Returns [2,3,4]
console.log(a.slice(-3,5));  // Returns [3]
