//'use strict';
function test(a) {
  console.log(a);
  console.log(this);
}
test(10);

b = 20
console.log(b);

/*
with (true) {
  console.log(1)
};
*/

//console.log(nondeclaredvar);