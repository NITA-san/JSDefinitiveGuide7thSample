let letters = [..."Hello world"];  // An array of letters

let everyother = "";
for(let [index, letter] of letters.entries()) {
    if (index % 2 === 0) everyother += letter;  // letters at even indexes
}
console.log(everyother);  // => "Hlowrd"

let [a,b] = [1,"a"];
console.log(a);
console.log(b);

let uppercase = "";
letters.forEach(letter => {  // Note arrow function syntax here
    uppercase += letter.toUpperCase();
});
console.log(uppercase);  // => "HELLO WORLD"