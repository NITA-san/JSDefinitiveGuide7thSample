const PROPERTY_NAME = "p1";
function computePropertyName() { return "p" + 2; }

let o = {};
o[PROPERTY_NAME] = 1;
o[computePropertyName()] = 2;

console.log(o.p1 + o.p2); // => 3

let p = {
    [PROPERTY_NAME]: 1,
    [computePropertyName()]: 2
};

console.log(p.p1 + p.p2); // => 3

o = { x: 1 };
p = { x: 0, ...o };
console.log(p.x);   // => 1: the value from object o overrides the initial value
let q = { ...o, x: 2 };
console.log(q.x);   // => 2: the value 2 overrides the previous value from o.

console.log("-------------");

let square = {
    area: function() { return this.side * this.side; },
    side: 10
};
console.log(square.area()); // => 100

square = {
    area() { return this.side * this.side; },
    side: 10
};
console.log(square.area()); // => 100

console.log("-------------");

const METHOD_NAME = "m";
const symbol = Symbol();
let weirdMethods = {
    "method With Spaces"(x) { return x + 1; },
    [METHOD_NAME](x) { return x + 2; },
    [symbol](x) { return x + 3; }
};
console.log(weirdMethods["method With Spaces"](1));  // => 2
console.log(weirdMethods[METHOD_NAME](1));           // => 3
console.log(weirdMethods[symbol](1));                // => 4

let t ={
    "test"() {console.log("test method");}
    ,aaa() {console.log("aaa method");}
}

t["test"]();
t.aaa();
t["aaa"]();

console.log("-------------");

p = {
    // x and y are regular read-write data properties.
    x: 1.0,
    y: 1.0,

    // r is a read-write accessor property with getter and setter.
    // Don't forget to put a comma after accessor methods.
    get r() { return Math.hypot(this.x, this.y); },
    set r(newvalue) {
        let oldvalue = Math.hypot(this.x, this.y);
        let ratio = newvalue/oldvalue;
        this.x *= ratio;
        this.y *= ratio;
    },

    // theta is a read-only accessor property with getter only.
    get theta() { return Math.atan2(this.y, this.x); }
};
console.log(p.r);     // => Math.SQRT2
console.log(p.theta); // => Math.PI / 4
