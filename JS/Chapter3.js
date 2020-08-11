/**
 * global scopes in let,var and local scopes .
 */

/**
 * places to not use a=parenthesis
 * 
 * ES6 functions,
 * simple if statements
 * 
 * 
 * creating a function within a function and naming it.
 */

const humus = function (factor) {
    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor
        if (ingredientAmount > 1) {
            unit += 's'
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    }
    ingredient(1, 'can,', 'chickpeas')
}
/**
 * CHICKEN and EGG senario
 */

function chicken() {
    return egg()
}

function egg() {
    chicken()
}

//  console.log(chicken() + 'which came first');
function multiplier(factor) {
    // return number => number * factor
    return function (number) {
        console.log(number);
        return number * factor
    }
}

let num = multiplier(2)
// num(8)
// console.log(num(9));

/**
 * function within a function
 */

function findSolution(target) {
    function find(current, history) {
        if (current == target) return history

        else if (current > target) return null

        else {
            find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`)
        }
        

    }
    return find(1, '1')
}
console.log(findSolution(24));
/**
 * ----------------------
 * using Sting function
 * ----------------------
 */
var cows = 23;
;
console.log(String(cows));

/**
 * --------------------------------------
 * getting the Nth character of a string
 * --------------------------------------
 */

 console.log('neither'[4]);