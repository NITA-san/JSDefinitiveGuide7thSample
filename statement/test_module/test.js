'use strict';  
const mod = require('./myModule');  
  
function local(arg) {  
  console.log('Local');  
  console.log(`${arg} -- ${arguments[0]}`);  
  arguments[0] = 20;  
  console.log(`${arg} -- ${arguments[0]}`);  
}  
  
local(10);  
mod.func(10); 