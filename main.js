"use strict"

const ages = [23,28,3,21,45];

let filterAges = ages.map(age => age * 2).filter(age => age >= 20).sort((a, b) => a - b ).reduce((a, b) => (a + b), 0);

console.log(filterAges);