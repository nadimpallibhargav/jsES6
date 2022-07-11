"use strict"

async function fetchData() {
    const apiRes = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await apiRes.json();

    const pincode = data.map((zip) => {
        document.querySelector('ul').innerHTML += `<li>${zip.address.zipcode}</li>`;
    })
}

fetchData();