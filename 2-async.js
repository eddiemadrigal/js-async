// promises are returned

async function greeting(name) {
    return `Good morning, ${name}`;
}

console.log(greeting('Erika'));

let hello = async function(name) {
    return `Hello, ${name}`
}

console.log(hello('Ella'));

let bye = async (name) => `bye bye, ${name}!`;
console.log(bye('Sebas'));

// to consume the promises

greeting('Erika').then( res => {
    console.log(res)
});

hello('Ella').then(console.log);

