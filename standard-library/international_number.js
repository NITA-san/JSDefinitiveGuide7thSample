let euros = Intl.NumberFormat("es", {style: "currency", currency: "EUR"});
console.log(euros.format(10));    // => "10,00 €": ten euros, Spanish formatting

let pounds = Intl.NumberFormat("en", {style: "currency", currency: "GBP"});
console.log(pounds.format(1000)); // => "£1,000.00": One thousand pounds, English formatting

let data = [0.05, .75, 1];
let formatData = Intl.NumberFormat(undefined, {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
}).format;

console.log(data.map(formatData));   // => ["5.0%", "75.0%", "100.0%"]: in en-US locale

let arabic = Intl.NumberFormat("ar", {useGrouping: false}).format;
console.log(arabic(1234567890));   // => "١٢٣٤٥٦٧٨٩٠"

//let hindi = Intl.NumberFormat("hi-IN-u-nu-deva").format;
let hindi = Intl.NumberFormat("hi-IN-u-nu-deva").format;
console.log(hindi(1234567890));    // => "१,२३,४५,६७,८९०"
