"use strict"

const ages = [23,28,3,21,45];

const sumOfAges = ages.reduce( (total, nextage) => (total + nextage), 10 );

console.log(sumOfAges);