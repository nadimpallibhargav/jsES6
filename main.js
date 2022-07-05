"use strict"

let carWeakSet = new WeakSet();

let car1 = {
    company: 'Honda',
    modal: 'city'
}

let car2 = {
    company: 'Honda',
    modal: 'civic'
}

carWeakSet.add(car1);
carWeakSet.add(car2);

carWeakSet.delete(car1);

console.log(carWeakSet);