const fs = require("fs");

// Reading a specific portion of a data file
fs.open("test.json", (err, fd) => {
    if (err) {
        // Report error somehow
        return;
    }
    try {
        // Read bytes 20 through 420 into a newly allocated buffer.
        fs.read(fd, Buffer.alloc(400), 0, 400, 20, (err, n, b) => {
            // err is the error, if any.
            // n is the number of bytes actually read
            // b is the buffer that they bytes were read into.
        });
    }
    finally {          // Use a finally clause so we always
        fs.close(fd,()=>{});  // close the open file descriptor
    }
});
