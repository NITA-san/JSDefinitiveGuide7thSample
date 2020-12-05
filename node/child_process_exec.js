const child_process = require("child_process");
const util = require("util");
const execP = util.promisify(child_process.exec);

function parallelExec(commands) {
    // Use the array of commands to create an array of Promises
    let promises = commands.map(command => execP(command, {encoding: "utf8"}));
    // Return a Promise that will fulfill to an array of the fulfillment
    // values of each of the individual promises. (Instead of returning objects
    // with stdout and stderr properties we just return the stdout value.)
    return Promise.all(promises)
        .then(outputs => outputs.map(out => out.stdout));
}

module.exports = parallelExec;
//execP("ls -l").then(stdout => stdout.stdout).then(console.log);
//execP("ls -zzzl").then(stdout => console.log(stdout)).catch(stderr=>console.log(stderr));
parallelExec(["ls -1","pwd"]).then(console.log);