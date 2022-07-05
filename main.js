"use strict"

let carWeakMap = new WeakMap();

let key1 = {
    id: 1
}

let car1 = {
    company: 'honda',
    modal: 'city'
}

carWeakMap.set(key1,car1);

console.log(carWeakMap);