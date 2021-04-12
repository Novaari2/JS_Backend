// contoh menukar variabel dengan destructuring array
let a = 1;
let b = 2;

console.log("Before Swipe");
console.log("a: "+a);
console.log("b: "+b);

[a,b] = [b,a];

console.log("After Swipe");
console.log("a: "+a);
console.log("b: "+b);