// manipulasi array
const myArray = ["Coklat", 42.5, 22, true, "Programming"];

myArray.push("Javascript");

console.log(myArray);

// mengeluarkan nilai terakhir array
myArray.pop();

console.log(myArray);

/** 
Metode lain yang bisa kita gunakan untuk memanipulasi data pada array adalah shift() dan unshift(). 
Metode shift() digunakan untuk mengeluarkan elemen pertama dari array, 
sementara unshift() digunakan untuk menambahkan elemen di awal array.**/
myArray.shift();
console.log(myArray);
console.log("======================");
myArray.unshift("Mackbook");
console.log(myArray);

// delete array hanya menghapus index
delete myArray[1];
console.log("==========================");
console.log(myArray)

// menghapus elemen dengan splice()
myArray.splice(2,1); //menghapus dari index 2 sebanyak 1 elemen
console.log(myArray);