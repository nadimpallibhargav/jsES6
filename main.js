"use strict"

function *generatorFunction() {
    console.log('hi');
    yield 'step 1';
    console.log('this');
    yield 'step 2';
    return 'completed';
}

let steps = generatorFunction();

console.log(steps.next().value);
console.log(steps.next().value);
console.log(steps.next());