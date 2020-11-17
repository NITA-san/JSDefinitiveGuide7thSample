console.log(process.arch);

const os = require("os");
os.arch()              // Returns CPU architecture. "x64" or "arm", for example.
os.constants           // Useful constants such as os.constants.signals.SIGINT.
console.log(os.cpus());
console.log(os.totalmem());