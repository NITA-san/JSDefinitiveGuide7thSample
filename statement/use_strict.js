'use strict';
function test(a) {
  console.log(a);
  console.log(this);
}
test(10);

/*
with (true) {
  console.log(1)
};
*/

//console.log(nondeclaredvar);