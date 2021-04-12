/** 
Sesuai namanya “spread”, fitur ini digunakan untuk menyebarkan nilai array atau lebih tepatnya 
iterable object menjadi beberapa elemen. Spread operator dituliskan dengan tiga titik (...).**/

const favorite = ["Seafood","Salad","Nugget","Soup"];

console.log(favorite);
console.log("========================================");
console.log(...favorite);
console.log("========================================");
// menggabungkan nilai arra dengan spread operator
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites,...others];

console.log(allFavorites);