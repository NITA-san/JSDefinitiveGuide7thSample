const fs = require("fs");

fs.copyFileSync("ch15.txt", "ch15.bak");
fs.renameSync("ch15.bak", "ch16.bak");
fs.promises.unlink("ch16.bak").then(console.log("unlinked"));
