let text = JSON.stringify({a:"2021-01-23T14:38:24.222Z"});

let data = JSON.parse(text, function(key, value) {
    // Remove any values whose property name begins with an underscore
    if (key[0] === "_") return undefined;

    // If the value is a string in ISO 8601 date format convert it to a Date.
    if (typeof value === "string" &&
        /^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/.test(value)) {
        return new Date(value);
    }

    // Otherwise, return the value unchanged
    return value;
});

console.log(data);

// Specify what fields to serialize, and what order to serialize them in
let address = {city:"aaa", country:"japan", state:"yamagata"}
text = JSON.stringify(address, ["city","state","country"]);

console.log(text);

// Specify a replacer function that omits RegExp-value properties
let o = {a:/./, b:"bbb"}
let json = JSON.stringify(o, (k, v) => v instanceof RegExp ? undefined : v);

console.log(json);