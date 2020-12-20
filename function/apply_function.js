let f = () => { return "I'm f"};

const o = {};
console.log(f.call(o,"test"));
console.log(f.apply(o));
