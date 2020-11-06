const util = require("util");
const fs = require("fs");  // Require the filesystem module
const pfs = {              // Promise-based variants of some fs functions
    readFile: util.promisify(fs.readFile)
};

async function readConfigFile(path) {
    let text = await pfs.readFile(path, "utf-8");
    return JSON.parse(text);
}

readConfigFile("test.json").then((s) => console.log(s));
