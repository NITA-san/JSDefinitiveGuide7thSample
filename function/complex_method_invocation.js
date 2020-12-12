
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