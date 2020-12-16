// Append the names of the enumerable properties of object o to the
// array a, and return a.  If a is omitted, create and return a new array.
function getPropertyNames(o, a = []) {
    for(let property in o) a.push(property);
    return a;
}

console.log(getPropertyNames({id1: "dddd"}));
console.log(getPropertyNames({id1: "dddd"}, ["aaaaa","bbbb"]));