let f = () => { return "I'm f"};

const o = {};
console.log(f.call(o,"test"));
console.log(f.apply(o));

arrayOfNumbers = [1,2,3,4,5]
let biggest = Math.max.apply(Math, arrayOfNumbers);
console.log(biggest);