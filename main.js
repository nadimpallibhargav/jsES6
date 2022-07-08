"use strict"

const companies = [
    {
        name: 'infosys',
        start: 1990,
        end: 2022
    }
];

const totalYearsOfCompany = companies.reduce(
    (total, years) => (total + (years.end - years.start)), 0
);

console.log(totalYearsOfCompany)