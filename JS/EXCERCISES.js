function range(start, end, step) {
    let numbers = []

    if (step == null) {
        let diff = (end - start) + 1;
        for (let index = 0; index < diff; index++) {

            let count = start;
            numbers.push(count);
            count = start++;
        }
    } else {
        let diff = Math.floor((end - start) / step) + 1;

        for (let index = 0; index < diff; index++) {

            let count = start;

            numbers.push(count);

            count = start += step;
        }
    }
    return numbers;
}
let total = 0;
let counts = 0;

function sum(arg) {
    for (let i = 0; i < arg.length; i++) {
        counts = arg[i];
        total += counts
    }
    return total
}
console.log(range(1, 10, 3));

/**
 * ------------------------------
 * REVERSING AN ARRAY
 * ------------------------------
 */
let myArray = ['a','b','c','d','e']
 function reverseArray(argument) { 
     let newArray =[]
     for (let i = 0; i < argument.length; i++) {
         
         newArray.unshift(argument[i]);
     }
     return newArray;
  }
//   console.log(reverseArray(myArray));