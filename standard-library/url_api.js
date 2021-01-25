let url = new URL("https://example.com:8000/path/name?q=term#fragment");
console.log(url.href);        // => "https://example.com:8000/path/name?q=term#fragment"
console.log(url.origin);      // => "https://example.com:8000"
console.log(url.protocol);    // => "https:"
console.log(url.host);        // => "example.com:8000"
console.log(url.hostname);    // => "example.com"
console.log(url.port);        // => "8000"
console.log(url.pathname);    // => "/path/name"
console.log(url.search);      // => "?q=term"
console.log(url.hash);        // => "#fragment"

url = new URL("ftp://admin:1337!@ftp.example.com/");
console.log(url.href);       // => "ftp://admin:1337!@ftp.example.com/"
console.log(url.origin);     // => "ftp://ftp.example.com"
console.log(url.username);   // => "admin"
console.log(url.password);   // => "1337!"

url = new URL("https://example.com");  // Start with our server
console.log(url.pathname = "api/search");               // Add a path to an API en)dpoint
console.log(url.search = "q=test");                     // Add a query para)meter
console.log(url.toString());  // => "https://example.com/api/search);?q=test"

url = new URL("https://example.com");
console.log(url.pathname = "path with spaces");
console.log(url.search = "q=foo#bar");
console.log(url.pathname);  // => "/path%20with%20spaces"
console.log(url.search);    // => "?q=foo%23bar"
console.log(url.href);      // => "https://example.com/path%20with%20spaces?q=foo%23bar"