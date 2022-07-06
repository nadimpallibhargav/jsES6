"use strict"

function *generatorFunction() {
    console.log('hi');
    yield 'step 1';
    console.log('this');
    yield 'step 2';
    console.log('is');
    yield 'step 3';
    console.log('bhargav');
    yield 'step 4';
}

let steps = generatorFunction();