/**
 * WeakMap merupakan varian dari Map yang mendukung garbage collection. 
 * Garbage collection adalah proses di mana interpreter JavaScript mengambil kembali 
 * memori yang tidak lagi “dapat dijangkau” dan tidak dapat digunakan oleh program[3]. 
 * Garbage collection di JavaScript dilakukan secara otomatis dan bukan menjadi urusan dari developer.
 */

/**
 * Key dari WeakMap harus berupa object atau array. Nilai primitif tidak bisa digunakan sebagai key karena tidak mendukung garbage collection.
    WeakMap memiliki methodget(), set(), has(), dan delete(). Namun, WeakMap tidak termasuk kategori iterable sehingga tidak memiliki method keys(), values(), atau forEach().
    WeakMap juga tidak memiliki property size. Ini karena ukuran WeakMap dapat berubah karena proses garbage collection.
 */

// let visitsCountMap = new Map(); //menyimpan daftar user
let visitsCountMap = new WeakMap();

function countUser(user){
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let jonas = {name: "Jonas"};
countUser(jonas); //menambahkan user "Jonas"

jonas = null;

console.log(visitsCountMap);