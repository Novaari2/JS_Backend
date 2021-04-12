// Destructuring Array
const favorite = ["Seafood","Salad","Nugget","Soup"];

// const [firstFood, secondFood, thirdFood, fourthFood] = favorite;

// console.log(firstFood);
// console.log(secondFood);
// console.log(thirdFood);
// console.log(fourthFood);

// memilih nilai pada index tertentu
const [, , thirdFood, ] = favorite;

console.log(thirdFood);

// Destructuring Assignment
let myFood = "Ice Cream";
let herFood = "Noodles";

[myFood, herFood] = favorite;

console.log(myFood);
console.log(herFood);