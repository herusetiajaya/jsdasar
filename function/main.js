///
// Function
function greeting(){
    console.log("Hello, World!");
} // deklarasi function sederhana tanpa parameter / argument
greeting(); 
console.log('');
// function sederhana dgn parameter
function favMakan(nama, caraMasak){
    if(caraMasak === "Digoreng"){
        console.log(`${nama} suka makan Tempe`);
    }else if(caraMasak === "Direbus"){
        console.log(`${nama} suka makan Suyuran`);
    }else if(caraMasak === "Dibakar"){
        console.log(`${nama} suka makan Sate`);
    }else {
        console.log(`${nama} suka makan pecel`);
    }
}
favMakan("Heru", "Sembarang");
console.log('');
// function sederhana dgn parameter dan return
function perkalian(x, y){
    return x * y; // mengembalikan nilai setelah kode dieksekusi
}
let hasil = perkalian(3, 3);
console.log(hasil);
console.log('');
// Expression function
const favMinuman = function(firstName, rasaMinuman){
    if(rasaMinuman === "manis"){
        return firstName + " suka minum Es Coklat";
    }else if(rasaMinuman === "pahit"){
        return firstName + " suka minum Kopi"
    }else if(rasaMinuman === "hambar"){
        return firstName + " suka minum Teh Tawar"
    }else {
        return firstName + " suka minum air putih"
    }
}
console.log(favMinuman("Heru", "Sembarang"));
console.log('');

// function object parameter
const user = {id: 13, displayName: "Hesr", fullName: "Heru Setiawan",};
function introduce({displayName, fullName}) { 
    console.log(`${displayName} is ${fullName}`);
} // destructuring object dalam function
introduce(user);
console.log('');
// function default parameter
function exponentsFormula (baseNumber, exponent){
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}
exponentsFormula(2); // jika parameter kedua kosong maka hasilnya undefined
console.log('');
function _exponentsFormula (baseNumber, exponent = 2){
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`); 
} 
_exponentsFormula(3); // alternatifnya parameter kedua diberi nilai default
console.log('');
// function rest paramter 
function sum (...numbers){
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result;
}
console.log(sum(1, 2, 3, 4, 5));
console.log('');

// Arrow function
const salam = (nama) => { // arrow function expression
    console.log(`selamat pagi ${nama}`);
} 
salam("Heru");
console.log('');

const sayName = nama => { // arrow function expression jika hanya satu parameter
    console.log(`nama saya ${nama}`);
} 
sayName("Heru");
console.log('');

const sayHello = () => {  // arrow function expression jika tidak ada parameter
    console.log("Halo, selamat pagi");
} 
sayHello();
console.log('');

const lastWord = () => console.log("Semoga bahagia"); // arrow function expression (tanpa kurung kurawal {})
lastWord();
console.log('');

const multiply = (a,b) => a*b; // arrow function expression tanpa return
console.log(multiply(3,3));
console.log('');

///
// variable scope
const a = 'a'; // global variable
function parent(){
    const a = 'a'; // local variable
    function child(){
        const b = 'b'; // local variable dalam function turunan
    }
}

///
// closure
function init (){
    const myName = 'Heru Setiawan'; // variable local dalam scope function init
    function greet (){ // inner function, merupakan contoh closure
        console.log(`Halo, ${myName}`); // memanggil variable yg dideklarasikan di function init
    }
    return greet;
}
const myFunc = init();
myFunc();
console.log('');
// 
const add = () => {
    let counter = 0;
    return () => ++counter;
}
const addCounter = add();
console.log(addCounter());
console.log(addCounter());
console.log(addCounter());

///
//