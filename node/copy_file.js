const fs = require("fs");

// Basic synchronous file copy.
fs.copyFileSync("ch15.txt", "ch15.bak");

// The COPYFILE_EXCL argument copies only if the new file does not already
// exist. It prevents copies from overwriting existing files.
fs.copyFile("ch15.txt", "ch16.txt", fs.constants.COPYFILE_EXCL, err => {
    // This callback will be called when done. On error, err will be non-null.
});

// This code demonstrates the Promise-based version of the copyFile function.
// Two flags are combined with the bitwise OR opeartor |. The flags mean that
// existing files won't be overwritten, and that if the filesystem supports
// it, the copy will be a copy-on-write clone of the original file, meaning
// that no additional storage space will be required until either the original
// or the copy is modified.
// fs.promises.copyFile("Important data",
//     `Important data ${new Date().toISOString()}"
//                      fs.constants.COPYFILE_EXCL | fs.constants.COPYFILE_FICLONE)
//     .then(() => {
//         console.log("Backup complete");
//     });
//     .catch(err => {
//         console.error("Backup failed", err);
//     });