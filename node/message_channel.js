// Create a custom communication channel
const threads = require("worker_threads");
const {Worker} = require("worker_threads");
let channel = new threads.MessageChannel();

const worker = new Worker("./worker.js");

// Use the worker's default channel to transfer one end of the new
// channel to the worker. Assume that when the worker receives this
// message it immediately begins to listen for messages on the new channel.
worker.postMessage({ command: "changeChannel", data: channel.port1 },
    [channel.port1]);

// Now send a message to the worker using our end of the custom channel
//channel.port2.postMessage("Can you hear me now?");

// And listen for responses from the worker as well
//channel.port2.on("message", handleMessagesFromWorker);
