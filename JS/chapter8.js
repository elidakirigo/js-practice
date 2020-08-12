/**
 * ------------------
 * CHAPTER ONE TESTS
 * ------------------
 */




/**
 * --------------------------------
 * doing TESTS
 * --------------------------------
 */
function test(label, body) {
    if (!body()) console.log(`failed : ${label}`);

    else console.log(body());
}
test('convert latin text to uppercase', () => {
    return 'hello'.toUpperCase() == 'HELLO'
});

/**
 * ----------------------------------
 * add BREAKS in try and catch error
 * ----------------------------------
 */


/**
 * ---------------------------------
 * using EXTENDS in classes
 * ---------------------------------
 */
class Errors {
    constructor(debug, bug, includes) {
        this.debug = debug;
        this.bug = bug;
        this.includes = includes;
    }
}
class inputError extends Errors {
    constructor(debug, bug, includes, errorHandling) {
        super(debug, bug, includes)
        this.errorHandling = errorHandling;
    }
}
/**
 * -----------------------------
 * creating ASSERTIONS - 
 * they verify that something is 
 * the way it is supposed to be.
 * -this can be done using an error when you do not get the values you need
 * -----------------------------
 */

/**
 * ----------------------------------------------
 * DEBUGING SUMMARRY
 * .................
 * ## 1.using test function 
 * ## 2.using strict mode
 * ## 3.try debugging
 * ## 4.error propagation - using if statements and returning null
 * ## 5.Exceptions - getting to clean bugs that rarely interfere with the code.
 * ## 6.SELECTIVE CATCHING - using try and catch to catch errors
 * ## 7. ASSERTIONS - using error handling methods to throw alerts on wrong code.
 * ---------------------------------------------
 */