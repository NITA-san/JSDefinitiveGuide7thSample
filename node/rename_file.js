const fs = require("fs");

fs.copyFileSync("ch15.txt", "ch15.bak");
fs.renameSync("ch15.bak", "ch16.bak");
fs.unlinkSync("ch16.bak");
