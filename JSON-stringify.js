"use strict"

let person = {
    first: "Ed",
    last: "Sheeran",
};


let personAsString = JSON.stringify(person);
console.log(personAsString);


let peeps = [
    {
        first: "Ed",
        last: "Sheeran",
    },
    {
        first: "George",
        second: "Michael",
    },
];

let peepsAsString = JSON.stringify(peeps)
console.log(peepsAsString);
