class Glob {
    constructor(glob) {
        this.glob = glob;

        // We implement glob matching using RegExp internally.
        // ? matches any one character except /, and * matches zero or more
        // of those characters. We use capturing groups around each.
        let regexpText = glob.replace("?", "([^/])").replace("*", "([^/]*)");

        // We use the u flag to get Unicode-aware matching.
        // Globs are intended to match entire strings, so we use the ^ and $
        // anchors and do not implement search() or matchAll() since they
        // are not useful with patterns like this.
        this.regexp = new RegExp(`^${regexpText}$`, "u");
    }

    toString() { return this.glob; }

    [Symbol.search](s) { return s.search(this.regexp); }
    [Symbol.match](s)  { return s.match(this.regexp); }
    [Symbol.replace](s, replacement) {
        return s.replace(this.regexp, replacement);
    }
}

let pattern = new Glob("docs/*.txt");
console.log("docs/js.txt".search(pattern));   // => 0: matches at character 0
console.log("docs/js.htm".search(pattern));   // => -1: does not match
let match = "docs/js.txt".match(pattern);
match[0]     // => "docs/js.txt"
match[1]     // => "js"
match.index  // => 0
"docs/js.txt".replace(pattern, "web/$1.htm")  // => "web/js.htm"

const regexp1 = /foo/;
// console.log('/foo/'.startsWith(regexp1));
// expected output (Chrome): Error: First argument to String.prototype.startsWith must not be a regular expression
// expected output (Firefox): Error: Invalid type: first can't be a Regular Expression
// expected output (Safari): Error: Argument to String.prototype.startsWith cannot be a RegExp

console.log("aaaa bb".match(/bb$/));
console.log(/bb$/[Symbol.match]("aaaa bb"));
