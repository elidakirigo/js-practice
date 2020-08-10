/**
 * using Math function
 */
Math.max //returns the biggest value presented

Math.max(5, 98)

Math.min(5, 98) //returns the smallest value presented

//how to use it?

let variables = (Math.min(7, 5) * 70);

/**
 * the CONSOLE keyword
 * 
 * console can load
 * -sums,
 * -strings,
 * -functions,
 * -boolean expressions
 * -return operators
 */

/**
 * using prompt
 */
let yourname = Number(prompt('whats your name?'));

/**
 * using NAN function
 */

// Number.isNaN(yourname); //returns true if the results iS not a number hence here answer is true

/**
 * using while
 */
let obstacle = 4;
while (obstacle < 46) {
    console.log(obstacle);
    obstacle++;
}

do {
    console.log(8);
} while (obstacle < 9)

/**
 * breaking from a loop
 */
for (obstacle < 40; obstacle++;) {
    if (obstacle == 21) {
        break; //or use continue
    }
}
function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return factorial(n - 1) * n;
    }
}