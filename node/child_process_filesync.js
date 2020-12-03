const child_process = require("child_process");

let listing = child_process.execFileSync("ls", ["-l", "*.json"],
    { encoding: "utf8" });
console.logU(listing);