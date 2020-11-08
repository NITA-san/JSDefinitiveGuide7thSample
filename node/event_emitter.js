const EventEmitter = require("events"); // Module name does not match class name
const net = require("net");
let server = new net.Server();          // create a Server object

console.log(server instanceof EventEmitter);          // => true: Servers are EventEmitters
