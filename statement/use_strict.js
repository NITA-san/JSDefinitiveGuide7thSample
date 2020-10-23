'use strict';
function test(a) {
  console.log(a);
  console.log(this);
}
test(10);

/*
b = 20
console.log(b);

with (true) {
  console.log(1)
};
*/

let aa;
eval("let aa=3;console.log(aa);");
console.log(aa);
//eval("let aa=2; console.log(aa);");

let o = {a:1,a:2}
console.log(o.a);

function f(a,a) {
  console.log(a);
}

f(1,100);