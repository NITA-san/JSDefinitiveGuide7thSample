let n=3;

switch(n) {
    case 1:                        // Start here if n === 1
        // Execute code block #1.
        break;                     // Stop here
    case 2:                        // Start here if n === 2
        // Execute code block #2.
        break;                     // Stop here
    case 3:                        // Start here if n === 3
        // Execute code block #3.
        console.log("this is " + n);
        default:                       // If all else fails...
        // Execute code block #4.
        console.log("It's default");
        break;                     // Stop here
    }