"use strict"

let marks = [34,25,34,48];

let latestMarks = new Set(marks);

latestMarks.add({age: 23, height: 6});

console.log(latestMarks);