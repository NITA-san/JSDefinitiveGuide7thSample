class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
    static integerRangePattern = /^\((\d+)\.\.\.(\d+)\)$/;
    static parse(s) {
        let matches = s.match(Range.integerRangePattern);
        if (!matches) {
            throw new TypeError(`Cannot parse Range from "${s}".`)
        }
        return new Range(parseInt(matches[1]), matches[2]);
    }
}

let range = new Range(1,2);
console.log(range);

console.log(Range.parse("(11...11)"));