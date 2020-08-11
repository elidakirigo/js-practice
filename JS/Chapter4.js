/**
 * ------------------------------------
 * DATA STRUCTURES :OBJECTS AND ARRAYS
 * ------------------------------------
 */

/**
 * using .length on strings
 */
var mystring = 'ijminuhbgytfvredxscd'.length
// console.log(mystring);
/**
 * -------------------------
 * METHODS
 * -------------------------
 * ARRAY METHODS -
 * -
 * PUSH,POP,LENGTH, SHIFT,UNSHIFT,INDEXOF ,LASTINDEXOF
 * -------------------------
 * STRING METHODS -
 * -
 * TOUPPERCASE(), LENGTH  
 */

/**
 * USING THE DELETE 
 * -------------------
 * delete cody.age
 * -------------------
 * USING OBJECT.KEYS TO FIND THE PROPERTIES IN AN OBJECT
 * -----------------------------------------------------
 */
const data = new Object()
data.cert = 'new'
data.owner = 'recent'
data.date = new Date()
data.country = 'kenya'
//  console.log(Object.keys(data));
//  console.log(Object.values(data));

// console.log(Object.keys({
//   cert: 'new',
//   owner: 'recent',
//   date: new Date(),
//   country: 'kenya'
// }));

/**
 * ---------------------
 * USING OBJECT ASSIGN
 * ---------------------
 */

let test = {
  science: 23,
  math: 98,
  english: 3
}
let cat1 = {
  math: 33,
  physics: 90,
  chemistry: 88
}
Object.assign(test, cat1)
// console.log(test);

//or
Object.assign(test, {
  agri: 56,
  GEO: 75,
  math: 78
});
// console.log(test);

/**
 * ---------------------------------------
 * using math.sqrt
 * ---------------------------------------
 */
function returnTheSqrt(argument) {
  return Math.sqrt(argument)
}
// console.log(returnTheSqrt(121));
/**
 * --------------------------------
 * using ARRAYS and hasOwnProperty
 * --------------------------------
 */
let arr = [3, 4, 5, 3, 2, 3, 4, 5, 6]

for (const key in arr) {
  if (arr.hasOwnProperty(key)) {
    // console.log(arr[key]);
  }
}
// for (const key of object) {

// }

// console.log(arr.indexOf(4,4));
// console.log(arr.slice(4,4));
// console.log(arr.shift(4,4));
// console.log(arr.concat('344'));

/**
 * -------------------------------
 * THE TRIM METHOD REMOVES SPACES
 * -------------------------------
 */
// console.log(typeof String(4).padStart(3,'1'));
/**
 * ---------------------------------------------
 * USING SPLIT AND JOIN split is the oposite of join
 * SPLIT CANNOT BE USED WITH ARRAYS.
 * ---------------------------------------------
 */
// console.log(typeof arr.join(' ,'));
/**
 * using the repeat method
 */
// console.log('fus'.repeat(5));

// using ...others
// console.log(Math.abs(-Math.random() * 100))

/**
 * --------------------------------
 * objects
 * --------------------------------
 */
let {
  myArt
} = {
  myArt: 'yellow',
  vick: 'ytre'
}
// console.log(myArt);
/**
 * ------------------------
 * using JSON 
 * ------------------------
 */
JSON.stringify({
  myArt: 'yellow',
  vick: 'ytre'
})
JSON.parse({
  'myArt': 'yellow',
  'vick': 'ytre'
})