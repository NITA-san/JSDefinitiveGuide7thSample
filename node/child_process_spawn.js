const child_process = require("child_process");

let process = child_process.spawn("ls",["-al"]);
process.stdout.on("data", (data) => console.log(data.toString()));