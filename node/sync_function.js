
const fs = require("fs");
function readConfigFileSync(path) {
    let text = fs.readFileSync(path, "utf-8");
    return JSON.parse(text);
}
//console.log(readConfigFileSync("test.json"));

async function readConfigFileAsync(path) {
    let text = await fs.readFileSync(path, "utf-8");
    return JSON.parse(text);
//    return text;
}

console.log(readConfigFileAsync("test.json"));
readConfigFileAsync("test.json").then((s) => console.log(s));