var ages = new Map();
ages.set('borris', 32)
ages.set('agnes', 32)
ages.set('jen', 32)
console.log(ages);
console.log(ages.get('jen'));
console.log(ages.has('jen')); //return a boolean if the property is available


let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};
// protoRabbit.prototype[walk]=' runs'

let killerRabbit = Object.create(protoRabbit);

/**
 * -------------------------
 * ITERATOR INTERFACE, instanceof
 * -------------------------
 */
let myname = 'ELIDA'[Symbol.iterator]()
// console.log(ELIDAIterator.next());