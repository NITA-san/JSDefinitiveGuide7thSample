function Strange() { }
Strange.prototype = Range.prototype;
console.log(new Strange() instanceof Range);   // => true

function Range() { }
