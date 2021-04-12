const user = {
    name: "nova",
    age: "23",
    isJedi: true,
    "home world": "Semarang"
};

console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user["home world"]}`); // memanggil nilai object yg memiliki spasi

/**Ketika kita mengubah object menggunakan assignment operator dan property/key-nya sudah ada, 
maka nilai di dalamnya akan tergantikan dengan nilai yang baru. Sedangkan, 
jika property dengan nama key yang ditentukan tidak ditemukan, 
maka property baru akan ditambahkan ke object. **/

const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light Gray"
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
spaceship.class = "Light freighter";

console.log(spaceship);

// menghapus property pada object
delete spaceship.manufacturer;

console.log(spaceship);