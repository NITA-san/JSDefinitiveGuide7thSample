let o = {
    id: "id",
    get get() {
        return this.id;
    }
}

let p = {
    id: "pid"
};

console.log(o.get);
console.log(Reflect.get(o,"get",p));

console.log(Reflect.getOwnPropertyDescriptor(p, "id"));