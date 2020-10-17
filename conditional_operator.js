let greeting;
let username;

username = 'foo'
greeting = "hello " + (username ? username : "there");

console.log(greeting);

greeting = "hello ";
if (username) {
    greeting += username;
} else {
    greeting += "there";
}

console.log(greeting);
