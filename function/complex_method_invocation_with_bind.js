
let customer = { surname: "Sir" };

let f = () => {
    return {
        m: () => 222
    }
};

customer.surname.toUpperCase(); // Invoke method on customer.surname
f().m();                        // Invoke method m() on return value of f()

console.log(f().m());
console.log(customer.surname.toUpperCase());

let o = {                 // An object o.
    m: function() {       // Method m of the object.
        let self = this;  // Save the "this" value in a variable.
        console.log(this === o);        // => true: "this" is the object o.

        const f = (function() {
            console.log(this === o);  // true, since we bound this function to the outer this
        }).bind(this);

        // function f() {    // A nested function f
        //     console.log(this === o);    // => false: "this" is global or undefined
        //     console.log(self === o);    // => true: self is the outer "this" value.
        // }

    }
};
console.log(o.m());                    // Invoke the method m on the object o.