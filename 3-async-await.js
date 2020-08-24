async function hello(name) {
    return greeting = await Promise.resolve(`Hello, ${name}!`);
};

hello('Sebas').then(console.log)