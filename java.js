// eloquent
function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}
printFarmInventory(7, 16, 3);

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) / Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]));
}
console.log(phi([76, 9, 4, 1]));

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i],
            index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}
console.log(tableFor("pizza", JOURNAL)); // → [76, 9, 4, 1]

function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}
console.log(max(4, 1, 9, -2)); // → 9

let numbers = [5, 1, 7];
console.log(max(...numbers)); // → 7

let words = ["never", "fully"];
console.log(["will", ...words, "understand"]); // → ["will", "never", "fully", "understand"]

function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle)
    };
}
console.log(randomPointOnCircle(2)); // → {x: 0.3667, y: 1.966}

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) / Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]));
}

function phi([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) / Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10));
}

function greaterThan(n) {
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11)); // → true

function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}
noisy(Math.min)(3, 2, 1); // → calling with [3, 2, 1] // → called with [3, 2, 1] , returned 1

function unless(test, then) {
    if (!test) then();
}
repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    });
}); // → 0 is even // → 2 is even
// There is a built - in array method, forEach, that provides something like a
// for / of loop as a higher - order

["A", "B"].forEach(l => console.log(l)); // → A // → B

function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}
console.log(filter(SCRIPTS, script => script.living)); // → [{name: "Adlam", …}, …]

function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}
let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlScripts, s => s.name)); // → ["Adlam", "Arabic", "Imperial Aramaic", …]

function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0)); // → 10

function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}
console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
})); // → {name: "Han", …}

function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}
console.log(Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year)))); // → 1188 console.log(Math.round(average( SCRIPTS.filter(s => !s.living).map(s => s.year)))); // → 188

let total = 0,
    count = 0;
for (let script of SCRIPTS) {
    if (script.living) {
        total += script.year;
        count += 1;
    }
}
console.log(Math.round(total / count)); // → 1188

// Two emoji characters, horse and shoe let horseShoe = "🐴👟"; console.log(horseShoe.length); // → 4 console.log(horseShoe[0]); // → (Invalid half-character) console.log(horseShoe.charCodeAt(0)); // → 55357 (Code of the half-character) console.log(horseShoe.codePointAt(0)); // → 128052 (Actual code for horse emoji)

let roseDragon = "🌹🐉";
for (let char of roseDragon) {
    console.log(char);
} // → 🌹 // → 🐉

function textScripts(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({
        name
    }) => name != "none");
    let total = scripts.reduce((n, {
        count
    }) => n + count, 0);
    if (total == 0) return "No scripts found";
    return scripts.map(({
        name,
        count
    }) => {
        return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
}
console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"')); // → 61% Han, 22% Latin, 17% Cyrillic

let rabbit = {};
rabbit.speak = function (line) {
    console.log(`The rabbit says '${line}'`);
};
rabbit.speak("I'm alive."); // → The rabbit says 'I'm alive.'

function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {
    type: "white",
    speak
};
let hungryRabbit = {
    type: "hungry",
    speak
};
whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!"); // → The white rabbit says 'Oh my ears and whiskers, how // late it's getting!' hungryRabbit.speak("I could use a carrot right now."); // → The hungry rabbit says 'I could use a carrot right now.'

function normalize() {
    console.log(this.coords.map(n => n / this.length));
}
normalize.call({
    coords: [0, 2, 3],
    length: 5
}); // → [0, 0.4, 0.6]

let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!"); // → The killer rabbit says 'SKREEEE!'

function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

function Rabbit(type) {
    this.type = type;
}
Rabbit.prototype.speak = function (line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
};
let weirdRabbit = new Rabbit("weird");

class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

Rabbit.prototype.toString = function () {
    return `a ${this.type} rabbit`;
};

class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y);
            }
        }
    }
    get(x, y) {
        return this.content[y * this.width + x];
    }
    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }
}

let varyingSize = {
    get size() {
        return Math.floor(Math.random() * 100);
    }
};
console.log(varyingSize.size); // → 73 console.log(varyingSize.size); // → 49

class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }
    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
}
let temp = new Temperature(22);
console.log(temp.fahrenheit); // → 71.6 temp.fahrenheit = 86; console.log(temp.celsius); // → 30

class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) => undefined) {
        super(size, size, (x, y) => {
            if (x < y) return element(y, x);
            else return element(x, y);
        });
    }
    set(x, y, value) {
        super.set(x, y, value);
        if (x != y) {
            super.set(y, x, value);
        }
    }

    canYouSpotTheProblem() {
        "use strict";
        for (counter = 0; counter < 10; counter++) {
            console.log("Happy happy");
        }
    }
    canYouSpotTheProblem(); // → ReferenceError: counter is not defined

    test(label, body) {
        if (!body()) console.log(`Failed: ${label}`);
    }
}

function numberToString(n, base = 10) {
    let result = "",
        sign = "";
    if (n < 0) {
        sign = "-";
        n = -n;
    }
    do {
        result = String(n % base) + result;
        n /= base;
    } while (n > 0);
    return sign + result;

}
console.log(numberToString(13, 10)); // → 1.5e-3231.3e-3221.3e-3211.3e-3201.3e-3191.3e…-3181.3

for (;;) {
    try {
        let dir = promtDirection("Where?"); // ← typo! 
        console.log("You chose ", dir);
        break;
    } catch (e) {
        console.log("Not a valid direction. Try again.");
    }
}

class InputError extends Error {}

function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new InputError("Invalid direction: " + result);
}

for (;;) {
    try {
        let dir = promptDirection("Where?");
        console.log("You chose ", dir);
        break;
    } catch (e) {
        if (e instanceof InputError) {
            console.log("Not a valid direction. Try again.");
        } else {
            throw e;
        }
    }
}

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20")); // → true console.log(dateTime.test("30-jan-2003 15:20")); // → false

let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour")); // → true console.log(neighbor.test("neighbor")); // → true

let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'")); // → ["'hello'", "hello"]

function getDate(string) {
    let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month - 1, day);
}
console.log(getDate("1-30-2003")); // → Thu Jan 30 2003 00:00:00 GMT+0100 (CET)

console.log("Liskov, Barbara\nMcCarthy, John\nWadler, Philip".replace(/(\w+), (\w+)/g, "$2 $1")); // → Barbara Liskov // John McCarthy // Philip Wadler

let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase())); // → the CIA and FBI
// Here’ s a more interesting one:
let stock = "1 lemon, 2 cabbages, and 101 eggs";

function minusOne(match, amount, unit) {
    amount = Number(amount) - 1;
    if (amount == 1) { // only one left, remove the 's' 
        unit = unit.slice(0, unit.length - 1);
    } else if (amount == 0) {
        amount = "no";
    }
    return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne)); // → no lemon, 1 cabbage, and 100 eggs

function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
console.log(stripComments("1 + /* 2 */3")); // → 1 + 3

let name = "harry";
let text = "Harry is a suspicious character.";
let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));

let name = "dea+hl[]rd";
let text = "This dea+hl[]rd guy is super annoying.";
let escaped = name.replace(/[\\[.+*?(){|^$]/g, "\\$&");
let regexp = new RegExp("\\b" + escaped + "\\b", "gi");
console.log(text.replace(regexp, "_$&_")); // → This _dea+hl[]rd_ guy is super annoying.

let pattern = /y/g;
pattern.lastIndex = 3;
let match = pattern.exec("xyzzy");
console.log(match.index); // → 4 console.log(pattern.lastIndex); // → 5

let digit = /\d/g;
console.log(digit.exec("here it is: 1")); // → ["1"] console.log(digit.exec("and now: 1")); // → null

function parseINI(string) { // Start with an object to hold the top-level fields 
    let result = {};
    let section = result;
    string.split(/\r?\n/).forEach(line => {
        let match;
        if (match = line.match(/^(\w+)=(.*)$/)) {
            section[match[1]] = match[2];
        } else if (match = line.match(/^\[(.*)\]$/)) {
            section = result[match[1]] = {};
        } else if (!/^\s*(;.*)?$/.test(line)) {
            throw new Error("Line '" + line + "' is not valid.");
        }
    });
    return result;
}
console.log(parseINI(` name=Vasilis [address] city=Tessaloniki`)); // → {name: "Vasilis", address: {city: "Tessaloniki"}}

const weekDay = function () {
    const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return {
        name(number) {
            return names[number];
        },
        number(name) {
            return names.indexOf(name);
        }
    };
}();
console.log(weekDay.name(weekDay.number("Sunday"))); // → Sunday

let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`)); // → Got 15

function storage(nest, name) {
    return new Promise(resolve => {
        nest.readStorage(name, result => resolve(result));
    });
}
storage(bigOak, "enemies").then(value => console.log("Got", value));

new Promise((_, reject) => reject(new Error("Fail"))).then(value => console.log("Handler 1")).catch(reason => {
    console.log("Caught failure " + reason);
    return "nothing";
}).then(value => console.log("Handler 2", value)); // → Caught failure Error: Fail // → Handler 2 nothing

class Timeout extends Error {}

function request(nest, target, type, content) {
    return new Promise((resolve, reject) => {
        let done = false;

        function attempt(n) {
            nest.send(target, type, content, (failed, value) => {
                done = true;
                if (failed) reject(failed);
                else resolve(value);
            });
            setTimeout(() => {
                if (done) return;
                else if (n < 3) attempt(n + 1);
                else reject(new Timeout("Timed out"));
            }, 250);
        }
        attempt(1);
    });
}

function requestType(name, handler) {
    defineRequestType(name, (nest, content, source, callback) => {
        try {
            Promise.resolve(handler(nest, content, source)).then(response => callback(null, response), failure => callback(failure));
        } catch (exception) {
            callback(exception);
        }
    });
}

requestType("ping", () => "pong");

function availableNeighbors(nest) {
    let requests = nest.neighbors.map(neighbor => {
        return request(nest, neighbor, "ping").then(() => true, () => false);
    });
    return Promise.all(requests).then(result => {
        return nest.neighbors.filter((_, i) => result[i]);
    });
}

requestType("connections", (nest, {
    name,
    neighbors
}, source) => {
    let connections = nest.state.connections;
    if (JSON.stringify(connections.get(name)) == JSON.stringify(neighbors)) return;
    connections.set(name, neighbors);
    broadcastConnections(nest, name, source);
});

function broadcastConnections(nest, name, exceptFor = null) {
    for (let neighbor of nest.neighbors) {
        if (neighbor == exceptFor) continue;
        request(nest, neighbor, "connections", {
            name,
            neighbors: nest.state.connections.get(name)
        });
    }
}
everywhere(nest => {
    nest.state.connections = new Map;
    nest.state.connections.set(nest.name, nest.neighbors);
    broadcastConnections(nest, nest.name);
});

function routeRequest(nest, target, type, content) {
    if (nest.neighbors.includes(target)) {
        return request(nest, target, type, content);
    } else {
        let via = findRoute(nest.name, target, nest.state.connections);
        if (!via) throw new Error(`No route to ${target}`);
        return request(nest, via, "route", {
            target,
            type,
            content
        });
    }
}
requestType("route", (nest, {
    target,
    type,
    content
}) => {
    return routeRequest(nest, target, type, content);
});

async function findInStorage(nest, name) {
    let local = await storage(nest, name);
    if (local != null) return local;
    let sources = network(nest).filter(n => n != nest.name);
    while (sources.length > 0) {
        let source = sources[Math.floor(Math.random() *
            sources.length)];
        sources = sources.filter(n => n != source);
        try {
            let found = await routeRequest(nest, source, "storage", name);
            if (found != null) return found;
        } catch (_) {}
    }
    throw new Error("Not found");
}

try {
    setTimeout(() => {
        throw new Error("Woosh");
    }, 20);
} catch (_) { // This will not run 
    console.log("Caught!");
}

let start = Date.now();
setTimeout(() => {
    console.log("Timeout ran at", Date.now() - start);
}, 20);
while (Date.now() < start + 50) {}
console.log("Wasted time until", Date.now() - start); // → Wasted time until 50 // → Timeout ran at 55

function anyStorage(nest, source, name) {
    if (source == nest.name) return storage(nest, name);
    else return routeRequest(nest, source, "storage", name);
}
async function chicks(nest, year) {
    let list = "";
    await Promise.all(network(nest).map(async name => {
        list += `${name}: ${ await anyStorage(nest, name, `chicks in ${year}`) }\n`;
    }));
    return list;
}

function parseExpression(program) {
    program = skipSpace(program);
    let match, expr;
    if (match = /^"([^"]*)"/.exec(program)) {
        expr = {
            type: "value",
            value: match[1]
        };
    } else if (match = /^\d+\b/.exec(program)) {
        expr = {
            type: "value",
            value: Number(match[0])
        };
    } else if (match = /^[^\s(),#"]+/.exec(program)) {
        expr = {
            type: "word",
            name: match[0]
        };
    } else {
        throw new SyntaxError("Unexpected syntax: " + program);
    }
    return parseApply(expr, program.slice(match[0].length));
}

function skipSpace(string) {
    let first = string.search(/\S/);
    if (first == -1) return "";
    return string.slice(first);
}

function parseApply(expr, program) {
    program = skipSpace(program);
    if (program[0] != "(") {
        return {
            expr: expr,
            rest: program
        };
    }
    program = skipSpace(program.slice(1));
    expr = {
        type: "apply",
        operator: expr,
        args: []
    };
    while (program[0] != ")") {
        let arg = parseExpression(program);
        expr.args.push(arg.expr);
        program = skipSpace(arg.rest);
        if (program[0] == ",") {
            program = skipSpace(program.slice(1));
        } else if (program[0] != ")") {
            throw new SyntaxError("Expected ',' or ')'");
        }
    }
    return parseApply(expr, program.slice(1));
}

function parse(program) {
    let {
        expr,
        rest
    } = parseExpression(program);
    if (skipSpace(rest).length > 0) {
        throw new SyntaxError("Unexpected text after program");
    }
    return expr;
}
console.log(parse("+(a, 10)")); // → {type: "apply", // operator: {type: "word", name: "+"}, // args: [{type: "word", name: "a"}, // {type: "value", value: 10}]}

specialForms.define = (args, scope) => {
    if (args.length != 2 || args[0].type != "word") {
        throw new SyntaxError("Incorrect use of define");
    }
    let value = evaluate(args[1], scope);
    scope[args[0].name] = value;
    return value;
}

function talksAbout(node, string) {
    if (node.nodeType == Node.ELEMENT_NODE) {
        for (let i = 0; i < node.childNodes.length; i++) {
            if (talksAbout(node.childNodes[i], string)) {
                return true;
            }
        }
        return false;
    } else if (node.nodeType == Node.TEXT_NODE) {
        return node.nodeValue.indexOf(string) > -1;
    }
}
console.log(talksAbout(document.body, "book")); // → true

function elt(type, ...children) {
    let node = document.createElement(type);
    for (let child of children) {
        if (typeof child != "string") node.appendChild(child);
        else node.appendChild(document.createTextNode(child));
    }
    return node;
}
document.getElementById("quote").appendChild(elt("footer", "—", elt("strong", "Karl Popper"), ", preface to the second editon of ", elt("em", "The Open Society and Its Enemies"), ", 1950"));

function time(name, action) {
    let start = Date.now(); // Current time in milliseconds 
    action();
    console.log(name, "took", Date.now() - start, "ms");
}
time("naive", () => {
    let target = document.getElementById("one");
    while (target.offsetWidth < 2000) {
        target.appendChild(document.createTextNode("X"));
    }
}); // → naive took 32 ms
time("clever", function () {
    let target = document.getElementById("two");
    target.appendChild(document.createTextNode("XXXXX"));
    let total = Math.ceil(2000 / (target.offsetWidth / 5));
    target.firstChild.nodeValue = "X".repeat(total);
}); // → clever took 1 ms 

// <a href = "https://developer.mozilla.org/" > MDN < /a> <script> let link = document.querySelector("a"); link.addEventListener("click", event => { console.log("Nope."); event.preventDefault(); }); 

window.addEventListener("keydown", event => {
    if (event.key == " " && event.ctrlKey) {
        console.log("Continuing!");
    }
});

window.addEventListener("click", event => {
    let dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(dot);
});

let bombTimer = setTimeout(() => {
    console.log("BOOM!");
}, 500);
if (Math.random() < 0.5) { // 50% chance 
    console.log("Defused.");
    clearTimeout(bombTimer);
}


// SVGS