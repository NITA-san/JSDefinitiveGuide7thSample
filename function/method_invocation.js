let o = {};
const f = x => 2*x;

o.m = f;
console.log(o.m(2));
console.log(o.m(2,3));

let calculator = { // An object literal
    operand1: 1,
    operand2: 1,
    add() {        // We're using method shorthand syntax for this function
        // Note the use of the this keyword to refer to the containing object.
        this.result = this.operand1 + this.operand2;
        return this.result;
    }
};
calculator.add();  // A method invocation to compute 1+1.
calculator.result  // => 2

console.log(calculator);
console.log(calculator.add());
console.log(calculator.result);
