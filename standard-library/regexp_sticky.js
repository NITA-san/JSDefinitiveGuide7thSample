let vowel = /[aeiou]/y;  // Sticky vowel match
console.log("test".match(vowel));      // => null: "test" does not begin with a vowel
vowel.lastIndex = 1;     // Specify a different match position
console.log("test".match(vowel)[0]);   // => "e": we found a vowel at position 1
console.log(vowel.lastIndex);          // => 2: lastIndex was automatically updated
console.log("test".match(vowel));      // => null: no vowel at position 2
console.log(vowel.lastIndex);          // => 0: lastIndex gets reset after failed match