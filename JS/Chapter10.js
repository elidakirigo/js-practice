/**
 * ----------------------
 * MODULES
 * ----------------------
 */
/**
 * ------------------------
 * EVALUATING DATA AS CODE
 * ------------------------
 */
const x = 1;

function evalAndReturnX(code) {
    eval(code)
    return x;
}

// console.log(evalAndReturnX('var x = 2'));

/**
 * ---------------------------
 * using Function constructor
 * ---------------------------
 */

let plusOne = Function('n', 'return n + 1')
//  console.log(plusOne(4));

/**
 * -------------------------
 * callback FUNCTIONS
 * -------------------------
 */

var BigOak = {}
BigOak.readStorage = function (argument, callback) {}
BigOak.readStorage('food caches', caches => {
    let firstCache = caches[0]
    BigOak.readStorage(firstCache, info => {
        // console.log(info);
    })
})
/**
 * -----------------------------------------------------------
 * using a call back function
 * -----------------------------------------------------------
 */

function time(name, action) {
    let start = Date.now() //gives current time in ms
    action()
    console.log(name, 'took', Date.now() - start, 'ms');
}
time('naive', () => {
    let target = document.getElementById('one')
    while (target.offsetWidth < 2000) {
        target.appendChild(document.createTextNode('X'))
    }
})
/**
 * ------------------------------
 * creating a promise
 * ------------------------------
 */
let fifteen = Promise.resolve(15)
fifteen
    .then(value => console.log(`got ${value}`))
    .then(() => {
        return null
    })

/**
 * using promise as a constructor
 */
function storage(nest, name) {
    return new Promise(resolve => {
        nest.readStorage(name, result => resolve(result))
    })
}

storage(BigOak, 'enemie')
    .then( /*value =>  console.log('got', value)*/ )

/**
 * -------------------------------
 * failures with asyn methods
 * -------------------------------
 * ## cannot send the error on time
 * ## may be hard to notice an error on the callback functions
 */

/**
 * ---------------------------
 * using the error constructor
 * ---------------------------
 */

var someError = new Error('failed')
//  console.log(someError);

/**
 * ----------------------------------------
 * LEANING ABOUT GENERATORS
 * -----------------------------------------
 */