"use strict"

let personDetails = new Map([['name','bhargav'],['age','23']]);

personDetails.delete('height');

console.log(personDetails);