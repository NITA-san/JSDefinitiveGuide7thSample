let digits = [..."0123456789ABCDEF"];
console.log(digits); // => ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

let letters = [..."hello world"];
console.log([...new Set(letters)]);  // => ["h","e","l","o"," ","w","r","d"]
