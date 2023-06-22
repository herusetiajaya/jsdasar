// first code in javaScript */
console.log("Hello, World!"); // function pada javaScript untuk menampilkan output

///
///
// variabel */
let firstName; // declaration statement / variabel
let lastName = "Setiawan"; // inisialisasi nilai variabel dengan assignment expression
const umur = 27; // inisialisasi nilai variabel yang tidak dapat diubah

///
///
// tipe data */
let fullName; // Undefined, Numbers, bigInt, Strings, Boolean, Null, Symbol
console.log(typeof(fullName)); // typeof() function untuk mengetahui tipe data variabel 

///
///
// operator */
// x = y; inisialisasi nilai x sama dengan y
let x = 10;
let y = 3;
x += y; // nilai x = x + y  &&& x -= y; , x *= y; , x /= y; , x %= y;
console.log(x);

///
///
// operator comparison */
// == , != , === , !== , > , >= , < , <=
let a = 10;
let b = 13;
console.log(a < b); // is a kurang dari b ? yes (= true)
console.log(a > b); // is a lebih dari b ? no (= false)

///
///
// operator logika */
let angka_A = 10;
let angka_B = 13;
// &&(AND)
console.log(angka_A < 15 && angka_B > 10); // (true && true) -> true
console.log(angka_A > 15 && angka_B > 10); // (false && true) -> false
// ||(OR)
console.log(angka_A < 15 || angka_B > 10); // (true || true) -> true
console.log(angka_A > 15 || angka_B > 10); // (false || true) -> true
// (!(NOT))
console.log(!(angka_A < 15 && angka_B > 10)); // (true && true) -> !(true) -> false
console.log(!(angka_A > 15 || angka_B > 10)); // (false || true) -> !(true) -> false
console.log(!(angka_A < 15)); // not(true) -> false

///
///
// if statement
console.log('');
let isLapar = true;
console.log('Persiapan untuk belajar')
if(isLapar){
    console.log('Makan dulu');
}
    console.log('Lanjut untuk belajar');
    console.log('');

// if/else statement
let nilaiAkhir = 50;
if(nilaiAkhir >= 70){
    console.log('Nilai anda adalah ' + nilaiAkhir);
}else{
    console.log('Nilai anda kurang dari 70');
}
console.log('');

// if/elseif statement
let suasanaJiwa = "gila";       // semangat , malas , bingung , ngantuk
let aktivitas = "menghayal";    // belajar , rebahan , nolep , tidur

if(suasanaJiwa === "semangat"){
    aktivitas = "belajar";
}else if (suasanaJiwa === "bingung"){
    aktivitas = "nolep";
}else if (suasanaJiwa === "malas"){
    aktivitas = "rebahan";
}else if (suasanaJiwa === "ngantuk"){
    aktivitas = "tidur";
}
console.log("Dia sedang : "+ aktivitas +", "+ "mungkin dia : "+ suasanaJiwa);
console.log('');

// ternary operator / conditional expressions
let isNgantuk = true ? "tidur" : "belajar";
console.log('saya ingin : '+ isNgantuk);
console.log('');
///
///
// switch case statement
let suasanaHati = 'stres'; // senang , sedih , marah , bingung , jahat , cuek
let reaksiWajah = null;    // senyum , menangis , jengkel , panik , sinis , keren

switch(suasanaHati){
    case "senang":
        reaksiWajah = "senyum";
        break;
    case "sedih":
        reaksiWajah = "menangis";
        break;
    default:
        reaksiWajah = "aneh"
}
console.log("Dia terlihat : "+ reaksiWajah +", "+ "mungkin dia : "+ suasanaHati);
console.log('');

///
///
// for loop
for(let i=0; i < 5; i++){
    console.log(i);
}
console.log('');

// for of loop
let names = ["Heru", "Martis", "Zilong", "Miya", "Franco"];

for(let name of names){
    console.log(name);
}
console.log('');

// while
let i_while = 1;
while (i_while <= 3){
    console.log(i_while);
    i_while++;
}
console.log('');
// do-while
let i_do = 1;
do {
    console.log(i_do);
    i_do++;
} while (i_do <= 4);


