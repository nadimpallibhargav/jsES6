"use strict"

const companies = [
    {
        name: 'infosys',
        start: 1990
    },
    {
        name: 'tata',
        start: 1970
    },
    {
        name: 'mahindhra',
        start: 2000
    },
]

const sortByYear = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

console.log(sortByYear); 