"use strict"

let marks = [34,25,34,48];

let latestMarks = new Set(marks);

latestMarks.add('50');

console.log(latestMarks);