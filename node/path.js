
const os = require("os");
// Some important paths
process.cwd()      // Absolute path of the current working directory.
__filename         // Absolute path of the file that holds the current code.
__dirname          // Absolute path of the directory that holds __filename.
os.homedir()       // The user's home directory.

const path = require("path");

path.sep                         // Either "/" or "\" depending on your OS

// The path module has simple parsing functions
let p = "src/pkg/test.js";       // An example path
console.log(path.basename(p));                 // => "test.js"
console.log(path.extname(p));                  // => ".js"
console.log(path.dirname(p));                  // => "src/pkg"
console.log(path.basename(path.dirname(p)));   // => "pkg"
console.log(path.dirname(path.dirname(p)));    // => "src"

// normalize() cleans up paths:
console.log(path.normalize("a/b/c/../d/"));    // => "a/b/d/": handles ../ segments
console.log(path.normalize("a/./b"));          // => "a/b": strips "./" segments
console.log(path.normalize("//a//b//"));       // => "/a/b/": removes duplicate /

// join() combines path segments, adding separators, then normalizes
console.log(path.join("src", "pkg", "t.js"));  // => "src/pkg/t.js"

// resolve() takes one or more path segments and returns an absolute
// path. It starts with the last argument and works backward, stopping
// when it has built an absolute path or resolving against process.cwd().
console.log(path.resolve());                   // => process.cwd()
console.log(path.resolve("t.js"));             // => path.join(process.cwd(), "t.js")
console.log(path.resolve("/tmp", "t.js"));     // => "/tmp/t.js"
console.log(path.resolve("/a", "/b", "t.js")); // => "/b/t.js"