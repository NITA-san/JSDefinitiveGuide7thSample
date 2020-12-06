const threads = require("worker_threads");
let channel = new threads.MessageChannel();
channel.port2.on("message", console.log);  // Log any messages we receive
channel.port1.postMessage("hello");        // Will cause "hello" to be printed