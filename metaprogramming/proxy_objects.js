let t = { x: 1, y: 2 };
let p = new Proxy(t, {});
console.log(p.x);          // => 1
console.log(delete p.y);   // => true: delete property y of the proxy
console.log(t.y);          // => undefined: this deletes it in the target, too
console.log(p.z = 3);     // Defining a new property on the proxy
console.log(t.z);          // => 3: defines the property on the target

function accessTheDatabase() { /* implementation omitted */ return 42; }
p = Proxy.revocable(accessTheDatabase, {});
let {proxy, revoke} = p;
console.log(p);
//let {proxy, revoke} = Proxy.revocable(accessTheDatabase, {});

console.log(proxy());   // => 42: The proxy gives access to the underlying target function
revoke(); // But that access can be turned off whenever we want
console.log(proxy());  // !TypeError: we can no longer call this function
