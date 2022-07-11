"use strict"

const user = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([user]).then(values => 

    console.log(values)
    
);