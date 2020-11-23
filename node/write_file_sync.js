const fs = require("fs");

const settings = {
    id1: 111,
    id2: 222
}

const path = require("path");

fs.writeFileSync(path.resolve(__dirname, "settings.json"),
    JSON.stringify(settings));
