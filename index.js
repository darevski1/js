
let cat = "Volvo";
const number = 12;
// Block scope
// if () {

// }
// Functions and loops
function info() {
    console.log("Statement function")
}
let display = function () {
    console.log("Function Expression");
}
const person = {
    myInfo: function () {
        console.log(myInfo);
    }
}
// Arrow function

const myFunc = name => console.log("My name is " + name)
myFunc("Darko");


let names = ["Tols", "gia", "mia"];

// Loops
for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

names.forEach(name => {
    console.log(name)
})

for (const name of names) {
    console.log(name)
}

const upperNames = names.map(name => {
    return name.toUpperCase();
})
console.log(upperNames)

const pets = [
    {
        name: "gia-gia",
        age: 1,
        type: "dog"
    },
    {
        name: "mia-gia",
        age: 3,
        type: "cat"
    },
    {
        name: "tia-gia",
        age: 2,
        type: "fish"
    },
];


const dogs = pets.filter(pet => pet.type == "dog");

