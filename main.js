"use strict"

async function fetchData() {
    const apiRes = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await apiRes.json();

    console.log(data);
}

fetchData();