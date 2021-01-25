let url = new URL("https://example.com/search");
console.log(url.search);                            // => "": no query yet
console.log(url.searchParams.append("q", "term")); // Add a search parameter
console.log(url.search);                            // => "?q=term"
console.log(url.searchParams.set("q", "x"));       // Change the value of this parameter
console.log(url.search);                            // => "?q=x"
console.log(url.searchParams.get("q"));             // => "x": query the parameter value
console.log(url.searchParams.has("q"));             // => true: there is a q parameter
console.log(url.searchParams.has("p"));             // => false: there is no p parameter
console.log(url.searchParams.append("opts", "1")); // Add another search parameter
console.log(url.search);                            // => "?q=x&opts=1"
console.log(url.searchParams.append("opts", "&")); // Add another value for same name
console.log(url.search);                            // => "?q=x&opts=1&opts=%26": note escape
console.log(url.searchParams.get("opts"));          // => "1": the first value
console.log(url.searchParams.getAll("opts"));       // => ["1", "&"]: all values
console.log(url.searchParams.sort());              // Put params in alphabetical order
console.log(url.search);                            // => "?opts=1&opts=%26&q=x"
console.log(url.searchParams.set("opts", "y"));    // Change the opts param
console.log(url.search);                            // => "?opts=y&q=x"
// searchParams is iterable
console.log([...url.searchParams]);                 // => [["opts", "y"], ["q", "x"]]
console.log(url.searchParams.delete("opts"));      // Delete the opts param
console.log(url.search);                            // => "?q=x"
console.log(url.href );                             // => "https://example.com/search?q=x"