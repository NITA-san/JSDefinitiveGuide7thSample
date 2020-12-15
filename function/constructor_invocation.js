o = new Object();
console.log(o);
o = new Object;
console.log(o);

class Test {
    constructor() {
        return new Date;
    }
}

t = new Test;
console.log(t);