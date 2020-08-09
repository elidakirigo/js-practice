var colors = new Array();
colors[0] = "red";
colors[1] = "green";
colors[2] = "blue";
colors[3] = "orange";
colors[4] = "magenta";
colors[5] = "cyan";
for (var i in colors) {
    document.write("<div style=\"background-color:" + colors[i] + ";\">" + colors[i] + "</div>\n");
}
try {
    runSomeCode();
} catch (err) {
    var txt = "There was an error on this page.\n\n" + "Error description: " + err.description + "\n\n";
    alert(txt)
}
var myDate = new Date();
myDate.setFullYear(2007, 2, 14);
var today = new Date();
var nextWeek = today + 7;
if (nextWeek > today) {
    alert("You have less than one week left");
}
if (Math.cos(Math.PI) != 0) {
    alert("Something is wrong with Math.cos");
}

function changeF() {
    var cText = document.getElementById("c");
    var fText = document.getElementById("f"); /* ... */
}
/* ... */
function sayHello() {
    alert("Hello World")
}
var a = 33;
var b = 10;
var c = "Test";
var linebreak = "<br />";

document.write("a + b = ");
result = a + b;
document.write(result);
document.write(linebreak);

document.write("a - b = ");
result = a - b;
document.write(result);
document.write(linebreak);

document.write("a / b = ");
result = a / b;
document.write(result);
document.write(linebreak);

document.write("a % b = ");
result = a % b;
document.write(result);
document.write(linebreak);

document.write("a + b + c = ");
result = a + b + c;
document.write(result);
document.write(linebreak);
a = a++;
document.write("a++ = ");
result = a++;
document.write(result);
document.write(linebreak);

b = b--;
document.write("b-- = ");
result = b--;
document.write(result);
document.write(linebreak);

var a = 10;
var b = 20;
var linebreak = "<br />";

document.write("(a == b) => ");
result = (a == b);
document.write(result);
document.write(linebreak);

document.write("(a < b) => ");
result = (a < b);
document.write(result);
document.write(linebreak);

document.write("(a > b) => ");
result = (a > b);
document.write(result);
document.write(linebreak);
document.write("(a != b) => ");
result = (a != b);
document.write(result);
document.write(linebreak);

document.write("(a >= b) => ");
result = (a >= b);
document.write(result);
document.write(linebreak);

document.write("(a <= b) => ");
result = (a <= b);
document.write(result);
document.write(linebreak);
var a = true;
var b = false;
var linebreak = "<br />";

document.write("(a &&  b) => ");
result = (a && b);
document.write(result);
document.write(linebreak);

document.write("(a || b) => ");
result = (a || b);
document.write(result);
document.write(linebreak);

document.write("!(a && b) => ");
result = (!(a && b));
document.write(result);
document.write(linebreak);
var a = 2; // Bit presentation 10 
var b = 3; // Bit presentation 11 
var linebreak = "<br />";

document.write("(a &  b) => ");
result = (a & b);
document.write(result);
document.write(linebreak);

document.write("(a | b) => ");
result = (a | b);
document.write(result);
document.write(linebreak);

document.write("(a ^ b) => ");
result = (a ^ b);
document.write(result);
document.write(linebreak);

document.write("(~b) => ");
result = (~b);
document.write(result);
document.write(linebreak);

document.write("(a << b) => ");
result = (a << b);
document.write(result);
document.write(linebreak);

document.write("(a >> b) => ");
result = (a >> b);
document.write(result);
document.write(linebreak);
var a = 10;
var b = 20;
var linebreak = "<br />";

document.write("((a > b) ? 100 : 200) => ");
result = (a > b) ? 100 : 200;
document.write(result);
document.write(linebreak);

document.write("((a < b) ? 100 : 200) => ");
result = (a < b) ? 100 : 200;
document.write(result);
document.write(linebreak);

var foo = 'calling out this part of the code';

function upperCase() {
    var x = document.getElementById("fname").value;
    document.getElementById("fname").value = x.toUpperCase();
}
// Constructor of the MyObject 
function MyObject(name, size) {
    this.name = name;
    this.size = size;
}
// Add a function to the prototype 
MyObject.prototype.tellSize = function () {
    alert("size of " + this.name + "is" + this.size);
}
// Create an instance of the object. The new object has tellSize() method. 

var myObj = new MyObject("Sang", "30 inches");

myObj.tellSize();

function getElement() {
    var x = document.getElementById("myHeader")
    alert("I am a " + x.tagName + " element")
}

<h1 id = "myHeader"onclick = "getElement()" > Click to see what element I am! </h1> 

function getElements() {
    var x = document.getElementsByName("myInput")
    alert(x.length + " elements!")
}

document.write(document.anchors[0].innerHTML)

function show_coords(event) {
    x = event.clientX
    y = event.clientY
    alert("X coords: " + x + ", Y coords: " + y)
}

function whichButton(event) {
    alert(event.keyCode)
}
var cody = new Object();
// then fill the cody object with properties (using dot notation) cody.living = true; cody.age = 33;
// live code: http: //jsfiddle.net/javascriptenlightenment/ckVA5/
15
cody.gender = 'male';
console.log(cody); // logs Object {living = true, age = 33, gender = 'male'}
var cody = new Object();
cody.living = true;
cody.age = 33;
cody.gender = 'male';
cody.getGender = function () {
    return cody.gender;
};

console.log(cody.getGender());
var myObject = new Object(); // produces an Object() object myObject['0'] = 'f'; myObject['1'] = 'o'; myObject['2'] = 'o';
console.log(myObject); // logs Object { 0="f", 1="o", 2="o"}
var myString = new String('foo'); // produces a String() object
console.log(myString); // logs foo { 0="f", 1="o", 2="o"}
var Person = function (living, age, gender) {
    this.living = living;
    this.age = age;
    this.gender = gender;
    this.getGender = function () {
        return this.gender;
    };
};
// instantiate a Person object and store it in the cody variable var cody = new Person(true, 33, 'male');
console.log(cody);

var Person = function Person(living, age, gender) {
        // live code: http: //jsfiddle.net/javascriptenlightenment/YPR6Q/
        // 20! // "this" below is the new object that is being created (i.e. this = new Object();) !
        this.living = living; 
        this.age = age; 
        this.gender = gender; 
        this.getGender = function() {return this.gender;};  // when the function is called with the new keyword "this" is returned instead of false 
    };
        // instantiate a Person object named cody 
        var cody = new Person(true, 33, 'male'); 
        // cody is an object and an instance of Person() 
        console.log(typeof cody); // logs object console.log(cody); // logs the internal properties and values of cody 
        console.log(cody.constructor); // logs the Person() function
        var Person = function (living, age, gender) {
            this.living = living;
            this.age = age;
            this.gender = gender;
            this.getGender = function () {
                return this.gender;
            };
        };
        var cody = new Person(true, 33, 'male');
        console.log(cody); // logs Object {living=true, age=33, gender="male", ...}
        var lisa = new Person(true, 34, 'female');
        console.log(lisa); // logs Object {living=true, age=34, gender="female", ...}

        var myNumber = new Number(23);
        var myString = new String('male');
        var myBoolean = new Boolean(false);
        var myObject = new Object();
        var myArray = new Array('foo', 'bar');
        var myFunction = new Function("x", "y", "return x*y");
        var myDate = new Date();
        var myRegExp = new RegExp('\bt[a-z]+\b');
        var myError = new Error('Crap!');
        // log/verify which constructor created the object console.log(myNumber.constructor); // logs Number() console.log(myString.constructor); // logs String() console.log(myBoolean.constructor); // logs Boolean() console.log(myObject.constructor); // logs Object() console.log(myArray.constructor); //logs Array(), in modern browsers console.log(myFunction.constructor); // logs Function() console.log(myDate.constructor); // logs Date() console.log(myRegExp.constructor); // logs RegExp() console.log(myError.constructor); // logs Error()


        var myNumber = new Number(23); // an object var myNumberLiteral = 23; // primitive number value, not an object
        var myString = new String('male'); // an object var myStringLiteral = 'male'; // primitive string value, not an object
        var myBoolean = new Boolean(false); // an object var myBooleanLiteral = false; // primitive boolean value, not an object
        var myObject = new Object();
        var myObjectLiteral = {};
        var myArray = new Array('foo', 'bar');
        var myArrayLiteral = ['foo', 'bar'];
        var myFunction = new Function("x", "y", "return x*y");
        var myFunctionLiteral = function (x, y) {
            return x * y
        };
        var myRegExp = new RegExp('\bt[a-z]+\b');
        var myRegExpLiteral = /\bt[a-z]+\b/;
        // verify that literals are created from same constructor
        console.log(myNumber.constructor, myNumberLiteral.constructor);
        console.log(myString.constructor, myStringLiteral.constructor);
        console.log(myBoolean.constructor, myBooleanLiteral.constructor);
        console.log(myObject.constructor, myObjectLiteral.constructor);
        console.log(myArray.constructor, myArrayLiteral.constructor);
        console.log(myFunction.constructor, myFunctionLiteral.constructor);
        console.log(myRegExp.constructor, myRegExpLiteral.constructor);

        var myString = 'string'
        var myNumber = 10;
        var myBoolean = false; // could be true or false, but that is it var myNull = null; var myUndefined = undefined;
        console.log(myString, myNumber, myBoolean, myNull, myUndefined);
        /* Consider that a complex object like array or object can be made up of multiple primitive values, and thus becomes a complex set of multiple values. */
        var myObject = {
            myString: 'string',
            myNumber: 10,
            myBoolean: false,
            myNull: null,
            myUndefined: undefined
        };
        console.log(myObject);
        var myArray = ['string', 10, false, null, undefined];
        console.log(myArray);

        var primitiveString1 = "foo";
        var primitiveString2 = String('foo');
        var primitiveNumber1 = 10;
        var primitiveNumber2 = Number('10');
        var primitiveBoolean1 = true;
        var primitiveBoolean2 = Boolean('true');
        // confirm the typeof is not object console.log(typeof primitiveString1, typeof primitiveString2); // logs 'string,string' console.log(typeof primitiveNumber1, typeof primitiveNumber2); // logs 'number,number, console.log(typeof primitiveBoolean1, typeof primitiveBoolean2); // logs 'boolean,boolean'
        // versus the usage of a constructor and new keyword for creating objects
        var myNumber = new Number(23);
        var myString = new String('male');
        Notes
        // live code: http: //jsfiddle.net/javascriptenlightenment/ZwgqD/
        28
        var myBoolean = new Boolean(false);
        var myObject = new Object();
        var myArray = new Array('foo', 'bar');
        var myFunction = new Function("x", "y", "return x * y");
        var myDate = new Date();
        var myRegExp = new RegExp('\\bt[a-z]+\\b');
        var myError = new Error('Crap!');
        // logs 'object object object object object function object function object' console.log( typeof myNumber, typeof myString, typeof myBoolean, typeof myObject, typeof myArray, typeof myFunction, // BE AWARE typeof returns function for all function objects typeof myDate, typeof myRegExp, // BE AWARE typeof returns function for RegExp() typeof myError );
        var price1 = 10;
        var price2 = 10;
        var price3 = new Number('10'); // a complex numeric object because new was used var price4 = price3;
        console.log(price1 === price2); // logs true
        /* logs false because price3 contains a complex number object and price 1 is a primitive value */
        console.log(price1 === price3);
        // logs true because complex values are equal by reference, not value console.log(price4 === price3);

        var myNull = null;
        var myUndefined = undefined;
        var primitiveString1 = "foo";
        var primitiveString2 = String('foo'); // did not use new, so we get primitive var primitiveNumber1 = 10; var primitiveNumber2 = Number('10'); // did not use new, so we get primitive var primitiveBoolean1 = true; var primitiveBoolean2 = Boolean('true'); // did not use new, so we get primitive
        /* Access the toString() property method (inherited by objects from object.prototype) to demonstrate that the primitive values are converted to objects when treated like objects. */
        // logs "string string" console.log(primitiveString1.toString(), primitiveString2.toString()); 
        // logs "number number" console.log(primitiveNumber1.toString(), primitiveNumber2.toString());
        // live code: http: //jsfiddle.net/javascriptenlightenment/gSTNp/
        // 31
        // logs "boolean boolean" console.log(primitiveBoolean1.toString(), primitiveBoolean2.toString()); 
        /* This will throw an error and not show up in firebug lite, as null and undefined do not convert to objects and do not have constructors. */
        console.log(myNull.toString());
        console.log(myUndefined.toString());

        var object = {
            myString: 'string',
            myNumber: 10,
            myBoolean: false,
            myNull: null,
            myUndefined: undefined
        };
        var array = ['string', 10, false, null, undefined];
        /* Contrast this to the simplicity of the primitive values below. In a primitive form, none of the values below can be more complex than what you see while complex values can encapsulate any of the JavaScript values (seen above). */
        var myString = 'string';
        var myNumber = 10;
        var myBoolean = false;
        var myNull = null;
        var myUndefined = undefined;

        // // primitive values var myNull = null;
        // live code: http: //jsfiddle.net/javascriptenlightenment/SSsVC/
        //     live code: http: //jsfiddle.net/javascriptenlightenment/QM95R/
        //     35
        var myUndefined = undefined;
        var primitiveString1 = "string";
        var primitiveString2 = String('string');
        var primitiveNumber1 = 10;
        var primitiveNumber2 = Number('10');
        var primitiveBoolean1 = true;
        var primitiveBoolean2 = Boolean('true');
        console.log(typeof myNull); // logs object? WHAT? Be aware... console.log(typeof myUndefined); // logs undefined console.log(typeof primitiveString1, typeof primitiveString2); // logs string string console.log(typeof primitiveNumber1, typeof primitiveNumber2); // logs number number console.log(typeof primitiveBoolean1, typeof primitiveBoolean2); // logs boolean boolean
        // Complex Values var myNumber = new Number(23); var myString = new String('male'); var myBoolean = new Boolean(false); var myObject = new Object(); var myArray = new Array('foo', 'bar'); var myFunction = new Function("x", "y", "return x * y"); var myDate = new Date(); var myRegExp = new RegExp('\\bt[a-z]+\\b'); var myError = new Error('Crap!');
        console.log(typeof myNumber); // logs object console.log(typeof myString); // logs object console.log(typeof myBoolean); // logs object console.log(typeof myObject); // logs object console.log(typeof myArray); // logs object console.log(typeof myFunction); // logs function? WHAT? Be aware... console.log(typeof myDate); // logs object console.log(typeof myRegExp); // logs function? WHAT? Be aware... console.log(typeof myError); // logs object

        String.augmentedProperties = [];
        if (!String.prototype.trimIT) { // if the prototype does not have trimIT() add it !
            String.prototype.trimIT = function() { return this.replace(/^\s+|\s+$/g, ''); 
        }
            ! // now add trimIT string to the augmentedProperties array !
            String.augmentedProperties.push('trimIT'); 
        } 
        var myString = '  trim me  '; console.log(myString.trimIT()); // invoke our custom trimIT string method, logs 'trim me'
            console.log(String.augmentedProperties.join()); // logs 'trimIT'

            var myNumber = new Number('23');
            var myNumberL = 23; // literal shorthand 
            var myString = new String('male'); 
            var myStringL = 'male'; // literal shorthand 
            var myBoolean = new Boolean('true'); var myBooleanL = true; // literal shorthand 
            var myObject = new Object(); var myObjectL = {}; // literal shorthand 
            var myArray = new Array(); var myArrayL = []; // literal shorthand 
            var myFunction = new Function(); var myFunctionL = function() {}; // literal shorthand 
            var myDate = new Date(); var myRegExp = new RegExp('/./'); var myRegExpL = /./; // literal shorthand 
            var myError = new Error();
            console.log( // all of these return true !
                myNumber.constructor === Number, 
                myNumberL.constructor === Number, 
                myString.constructor === String, 
                myStringL.constructor === String, 
                myBoolean.constructor === Boolean, 
                myBooleanL.constructor === Boolean, 
                myObject.constructor === Object, 
                myObjectL.constructor === Object, 
                myArray.constructor === Array,
                // live code: http: //jsfiddle.net/javascriptenlightenment/ZtewV/
                // live code: http: //jsfiddle.net/javascriptenlightenment/yJqaF/
                myArrayL.constructor === Array, myFunction.constructor === Function, myFunctionL.constructor === Function, myDate.constructor === Date, myRegExp.constructor === RegExp, myRegExpL.constructor === RegExp, myError.constructor === Error);

            var CustomConstructor = function CustomConstructor() {
                return 'Wow!';
            };
            var instanceOfCustomObject = new CustomConstructor();
            // logs true 
            console.log(instanceOfCustomObject.constructor === CustomConstructor); 
            // returns a reference to CustomConstructor() function // returns 'function() { return 'Wow!'; };' 
            console.log(instanceOfCustomObject.constructor);


            // this can be done with any of the native constructors that actual produce an object 
            var myString = new String(); var myNumber = new Number(); var myBoolean = new Boolean(true); var myObject = new Object(); var myArray = new Array(); var myFunction = new Function('return 2+2'); var myRegExp = new RegExp('\bt[a-z]+\b');
            myString.prop = 'test';
            myNumber.prop = 'test';
            myBoolean.prop = 'test';
            myObject.prop = 'test';
            myArray.prop = 'test';
            myFunction.prop = 'test';
            myRegExp.prop = 'test';
            // logs 'test', 'test', 'test', 'test', 'test', 'test', 'test' 
            console.log (myString.prop,myNumber.prop,myBoolean.prop,myObject.prop,myArray.prop,myFunction.prop, myRegExp.prop);
            // be aware: instance properties do not work with primitive/literal values 
            var myString = 'string'; var myNumber = 1; var myBoolean = true;
            myString.prop = true;
            myNumber.prop = true;
            myBoolean.prop = true;
            // logs undefined, undefined, undefined 
            console.log(myString.prop, myNumber.prop, myBoolean.prop);

            myObject.myFunction = function () {};
            myObject.myArray = [];
            myObject.myString = 'string';
            myObject.myNumber = 33;
            myObject.myDate = new Date();
            myObject.myRegExp = /a/;
            myObject.myNull = null;
            myObject.myUndefined = undefined;
            myObject.myObject = {};
            myObject.myMath_PI = Math.PI;
            myObject.myError = new Error('Crap!');
            console.log(myObject.myFunction, myObject.myArray, myObject.myString, myObject.myNumber, myObject.myDate, myObject.myRegExp, myObject.myNull, myObject.myNull, myObject.myUndefined, myObject.myObject, myObject.myMath_PI, myObject.myError);
            /* works the same with any of the complex objects, for example a function */
            var myFunction = function () {};
            myFunction.myFunction = function () {};
            myFunction.myArray = [];
            myFunction.myString = 'string';
            myFunction.myNumber = 33;
            myFunction.myDate = new Date();
            myFunction.myRegExp = /a/;
            myFunction.myNull = null;
            myFunction.myUndefined = undefined;
            myFunction.myObject = {};

            myFunction.myMath_PI = Math.PI;
            myFunction.myError = new Error('Crap!');
            console.log(myFunction.myFunction, myFunction.myArray, myFunction.myString, myFunction.myNumber, myFunction.myDate, myFunction.myRegExp, myFunction.myNull, myFunction.myNull, myFunction.myUndefined, myFunction.myObject, myFunction.myMath_PI, myFunction.myError);

            // encapsulation using objects, creates object chains var object1 = { !object1_1: { !!object1_1_1: {foo: 'bar'}, !!object1_1_2: {}, !}, !object1_2: { !!object1_2_1: {}, !!object1_2_2: {}, !} };
            console.log(object1.object1_1.object1_1_1.foo); 
            // logs 'bar'