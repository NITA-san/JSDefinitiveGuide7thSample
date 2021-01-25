// A basic comparator for sorting in the user's locale.
// Never sort human-readable strings without passing something like this:
const collator = new Intl.Collator().compare;
["a", "z", "A", "Z"].sort(collator)      // => ["a", "A", "z", "Z"]

// Filenames often include numbers, so we should sort those specially
const filenameOrder = new Intl.Collator(undefined, { numeric: true }).compare;
console.log(["page10", "page9"].sort(filenameOrder));  // => ["page9", "page10"]

// Find all strings that loosely match a target string
const fuzzyMatcher = new Intl.Collator(undefined, {
    sensitivity: "base",
    ignorePunctuation: true
}).compare;
let strings = ["food", "fool", "Føø Bar"];
console.log(strings.findIndex(s => fuzzyMatcher(s, "Foobar") === 0));  // => 2

// Before 1994, CH and LL were treated as separate letters in Spain
const modernSpanish = Intl.Collator("es-ES").compare;
const traditionalSpanish = Intl.Collator("es-ES-u-co-trad").compare;
let palabras = ["luz", "llama", "como", "chico"];
console.log(palabras.sort(modernSpanish));      // => ["chico", "como", "llama", "luz"]
console.log(palabras.sort(traditionalSpanish)); // => ["como", "chico", "luz", "llama"]
