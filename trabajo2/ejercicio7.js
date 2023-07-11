function newFunction(a,b,c) {
let x = Math.min(a, b, c);

let y = Math.max(a, b, c);

let z = (a + b + c) - x - y;

console.log(x, z, y);
}
newFunction(3,7,5)