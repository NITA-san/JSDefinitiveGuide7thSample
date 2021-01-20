let matched = "7 plus 8 equals 15".match(/\d+/g)  // => ["7", "8", "15"]

console.log(matched);

// A very simple URL parsing RegExp
let url = /(\w+):\/\/([\w.]+)\/(\S*)/;
let text = "Visit my blog at http://www.example.com/~david";
let match = text.match(url);
let fullurl, protocol, host, path;
if (match !== null) {
    fullurl = match[0];   // fullurl == "http://www.example.com/~david"
    protocol = match[1];  // protocol == "http"
    host = match[2];      // host == "www.example.com"
    path = match[3];      // path == "~david"
}

console.log(fullurl);
console.log(protocol);
console.log(host);
console.log(path);

console.log('----------')

url = /(?<protocol>\w+):\/\/(?<host>[\w.]+)\/(?<path>\S*)/;
text = "Visit my blog at http://www.example.com/~david";
match = text.match(url);
console.log(match[0]);               // => "http://www.example.com/~david"
console.log(match.input);            // => text
console.log(match.index);            // => 17
console.log(match.groups.protocol);  // => "http"
console.log(match.groups.host);      // => "www.example.com"
console.log(match.groups.path);      // => "~david"