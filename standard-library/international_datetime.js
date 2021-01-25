let d = new Date("2020-01-02T13:14:15Z");  // January 2nd, 2020, 13:14:15 UTC

// With no options, we get a basic numeric date format
console.log(Intl.DateTimeFormat("en-US").format(d)); // => "1/2/2020"
console.log(Intl.DateTimeFormat("fr-FR").format(d)); // => "02/01/2020"

// Spelled out weekday and month
let opts = { weekday: "long", month: "long", year: "numeric", day: "numeric" };
console.log(Intl.DateTimeFormat("en-US", opts).format(d)); // => "Thursday, January 2, 2020"
console.log(Intl.DateTimeFormat("es-ES", opts).format(d)); // => "jueves, 2 de enero de 2020"

// The time in New York, for a French-speaking Canadian
opts = { hour: "numeric", minute: "2-digit", timeZone: "America/New_York" };
console.log(Intl.DateTimeFormat("fr-CA", opts).format(d)); // => "8 h 14"

opts = { era: "long" };
console.log(Intl.DateTimeFormat('ja-JP-u-ca-japanese', opts).format(d));

opts = { year: "numeric", era: "short" };
console.log(Intl.DateTimeFormat("en", opts).format(d));                // => "2020 AD"
console.log(Intl.DateTimeFormat("en-u-ca-iso8601", opts).format(d));   // => "2020 AD"
console.log(Intl.DateTimeFormat("en-u-ca-hebrew", opts).format(d));    // => "5780 AM"
console.log(Intl.DateTimeFormat("en-u-ca-buddhist", opts).format(d));  // => "2563 BE"
console.log(Intl.DateTimeFormat("en-u-ca-islamic", opts).format(d));   // => "1441 AH"
console.log(Intl.DateTimeFormat("en-u-ca-persian", opts).format(d));   // => "1398 AP"
console.log(Intl.DateTimeFormat("en-u-ca-indian", opts).format(d));    // => "1941 Saka"
console.log(Intl.DateTimeFormat("en-u-ca-chinese", opts).format(d));   // => "36 78"
console.log(Intl.DateTimeFormat("en-u-ca-japanese", opts).format(d));  // => "2 Reiwa"