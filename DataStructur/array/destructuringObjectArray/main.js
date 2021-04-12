// Destructuring Object
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 23
}

// const {firstName,lastName,age} = profile;

// console.log(firstName,lastName,age);

// Destructuring Assignment
let firstName = "Nova";
let age = 24;

// menginisialisasi nilai baru melalui object destruction
({firstName, age} = profile);

console.log(firstName);
console.log(age);