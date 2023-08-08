// Belajar Logika
let x = 10;

console.log (x <= 12 && x >= 10);
console.log (x <= 12 && x >= 12);
console.log (x == 10 && x != 12);
console.log (x == 10 && x != 10);
console.log (x == '10' && x == 10);
console.log (x == '10' && x === '10');

console.log (x == 10 || x == 12);
console.log (x == 12 || x == 12);
console.log (x <= 12 || x >= 12);

console.log (!(x%2 == 0));
console.log (!(x%2 == 1)); 

console.log (!(x == 10 && x <= 12));
console.log (!(x == 12 && x >= 12));
console.log (!(x >= 12 || x == 12));
console.log (!(x == 10 || x != 12));

