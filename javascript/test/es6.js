function add(a, b=10) {
    return a + b
}

console.log(add(1))


function add2(a, ...b) {
    return b.reduce((pre, v) => pre + v, a);
}

console.log(add2(1, 2, 3, 4, 5))



var a  = 1, b = 2;
[a, b] = [b, a]
console.log(a, b)