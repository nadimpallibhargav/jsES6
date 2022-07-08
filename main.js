"use strict"

const ages = [23,28,3,21,45];

const sumOfAges = ages.reduce((total, nextage) => (total + nextage));

console.log(sumOfAges);