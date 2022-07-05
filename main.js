"use strict"

let carWeakSet = new WeakSet();

let car1 = {
    company: 'Honda',
    modal: 'city'
}

carWeakSet.add(car1);

console.log(carWeakSet);