"use strict"

function *generatorFunction() {
    console.log('hi');
    yield 'step 1';
    console.log('this');
    yield 'step 2';
    return 'completed';
}

let steps = generatorFunction();

for(let allSteps of steps) {
    console.log(allSteps);
} 