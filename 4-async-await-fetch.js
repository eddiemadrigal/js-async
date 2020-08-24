import fetch from 'cross-fetch';

async function myFetch() {
    const URL = 'https://jsonplaceholder.typicode.com/users';
    let data = await (await fetch(URL)).json();
    console.log(data[0].name);
}

myFetch();