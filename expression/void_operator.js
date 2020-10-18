let counter = 0;
const increment = () => void counter++;
console.log(increment());   // => undefined
console.log(counter);       // => 1