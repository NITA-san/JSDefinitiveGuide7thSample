function vectorAdd(v1, v2) {
    return [v1[0] + v2[0], v1[1] + v2[1]];
}
console.log(vectorAdd([1,2], [3,4]));  // => [4,6]

function vectorAdd2([x1,y1], [x2,y2]) { // Unpack 2 arguments into 4 parameters
    return [x1 + x2, y1 + y2];
}
console.log(vectorAdd2([1,2], [3,4]));  // => [4,6]