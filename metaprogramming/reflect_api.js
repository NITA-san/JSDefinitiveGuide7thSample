let o = {
    id: "id",
    get get() {
        return this.id;
    }
}

let p = {
    id: "pid"
};

let arr = /^(.*)/;

console.log(o.get);
console.log(Reflect.get(o,"get",p));

console.log(Reflect.getOwnPropertyDescriptor(p, "id"));
console.log(Reflect.getPrototypeOf(arr));
console.log(arr);