let o = {s: "", n: 0, a: [true, false, null]};
let s = JSON.stringify(o);  // s == '{"s":"","n":0,"a":[true,false,null]}'
let copy = JSON.parse(s);   // copy == {s: "", n: 0, a: [true, false, null]}

console.log(s);
console.log(copy);

let r = /.*$/;
console.log(JSON.stringify(r));