let r = /\d{2,4}/; // Match between two and four digits
r = /\w{3}\d?/;    // Match exactly three word characters and an optional digit
r = /\s+java\s+/;  // Match "java" with one or more spaces before and after
r = /[^(]*/;       // Match zero or more characters that are not open parens
