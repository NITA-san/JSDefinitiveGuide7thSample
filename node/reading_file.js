const fs = require("fs");
//let buffer = fs.readFileSync("test.data");      // Synchronous, returns buffer
//let text = fs.readFileSync("data.csv", "utf8"); // Synchronous, returns string

// Or use the Promise API with await inside an async function
async function processText(filename, encoding = "utf8") {
    let text = await fs.promises.readFile(filename, encoding);
    // ... process the text here...
    //    console.log(text);
    return text;
}

processText("test.json").then((data) => console.log(data));