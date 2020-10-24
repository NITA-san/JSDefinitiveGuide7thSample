
let book;
//let book = new Object;
//book.author = {surname:"Smith"};
// A verbose and explicit technique
let surname = undefined;
surname = book.author.surname;

if (book) {
    if (book.author) {
        surname = book.author.surname;
    }
}

console.log("surname="+surname);

// A concise and idiomatic alternative to get surname or null or undefined
surname = book && book.author && book.author.surname;
console.log("surname="+surname);
