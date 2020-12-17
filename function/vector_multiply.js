// Multiply the vector {x,y} by a scalar value
function vectorMultiply({ x, y }, scalar) {
    return { x: x * scalar, y: y * scalar };
}
console.log(vectorMultiply({ x: 1, y: 2 }, 2));  // => {x: 2, y: 4}

// Multiply the vector {x,y} or {x,y,z} by a scalar value
function vectorMultiply2({ x, y, z = 0 }, scalar) {
    return { x: x * scalar, y: y * scalar, z: z * scalar };
}
console.log(vectorMultiply2({ x: 1, y: 2 }, 2));  // => {x: 2, y: 4, z: 0}
console.log(vectorMultiply2({ a: 1, b: 2, c: 3 }, 2));  // => {x: 2, y: 4, z: 0}