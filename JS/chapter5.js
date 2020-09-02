// using Map
let m = [2, 3, 1, 4, 5, 3]
let n = m.map((minus, times) => {
    return minus * minus + times;
})

let b = m.filter(fill => {
    if (fill % 2 == 0) return fill;
})
// console.log(b);

v = m.reduce(remove => {
    return remove;
})
// console.log(n);

/**
 * --------------------
 * CLASSES
 * --------------------
 */
let object = new class {
    getword() {
        return 'hello'
    }
}