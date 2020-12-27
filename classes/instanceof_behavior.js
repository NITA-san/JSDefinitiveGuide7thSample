function Strange() { }
Strange.prototype = Range.prototype;
console.log(new Strange() instanceof Range);   // => true

function Range() { }
Range.prototype = {
    methods: function(x) { return 0; },
};

console.log(Range.methods.isPrototypeOf(r));  // range.methods is the prototype object.