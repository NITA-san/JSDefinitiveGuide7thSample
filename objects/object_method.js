let point = {
    x: 1,
    y: 2,
    toString: function() { return `(${this.x}, ${this.y})`; }
};
String(point)    // => "(1, 2)": toString() is used for string conversions

console.log(point.toString());
console.log(String(point));

point = {
    x: 1000,
    y: 2000,
    toString: function() { return `(${this.x}, ${this.y})`; },
    toLocaleString: function() {
        return `(${this.x.toLocaleString()}, ${this.y.toLocaleString()})`;
    }
};
console.log(point.toString());        // => "(1000, 2000)"
console.log(point.toLocaleString());  // => "(1,000, 2,000)": note thousands separators

point = {
    x: 3,
    y: 4,
    valueOf: function() { return Math.hypot(this.x, this.y); }
};

console.log(Number(point));  // => 5: valueOf() is used for conversions to numbers
console.log(point > 4);      // => true
console.log(point > 5);      // => false
console.log(point < 6);      // => true

point = {
    x: 1,
    y: 2,
    toString: function() { return `(${this.x}, ${this.y})`; },
    toJSON: function() { return this.toString(); }
};
console.log(JSON.stringify([point]));   // => '["(1, 2)"]'