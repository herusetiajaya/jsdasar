// Struktur data
///
// Object
const person = {
    firstName: "Heru",
    lastName: "Setiawan",
    gender: "Laki-laki",
    skinColor: "Coklat",
    isMarried: false,
    age: 24,
    "hair color": "Hitam",
}; // variable obeject = {key1: value1, key2: value2};
console.log(`Hallo, nama saya : ${person.firstName} ${person.lastName}`); // cara mengakses property dari object
console.log(`Warna rambut saya : ${person["hair color"]}`); // akses property dari obejct dengan bracket / tanda kurung siku
// modifikasi object
person.skinColor = "Hitam"; // mengubah property dalam object
person["age"] = 25; // cara kedua untuk mengubah property dalam object
person.hoby = "game"; // menambahkan property dalam object
delete person.gender; // menghapus property dalam object
console.log(person);
console.log('');

///
// Array
let masaDepan = ["rencana", "menikah", 27, 5, 2029, true, "bahagia"]; // array numeric dimulai dgn index [0,1,2,3,4,5,6];
console.log(masaDepan[0]); // menampilkan value dari array index ke 0
console.log(masaDepan[1]); // menampilkan value dari array index ke 1
console.log(masaDepan.length); // untuk mengetahui panjang array
delete masaDepan[6]; // menghapus value dari array index ke 6
masaDepan.push("punya anak"); // function untuk menambahkan value & index dalam array
// function system lainnya pop(), shift(), unshift(), splice()
console.log(masaDepan);
console.log('');

///
// Spread operator
const namaHero = ["Martis", "Zilong", "Miya", "Balmond", "Franco"];
console.log(...namaHero); // menampilkan array menggunkan spread operator
const namaHero_ke2 = ["Alucard", "Saber", "Layla"]; // new array
const heroML = [...namaHero, ...namaHero_ke2]; // menggabungkan kedua array dgn spread operator
console.log(heroML);
// cara ini juga bisa digunakan untuk object
console.log('');

///
// Destructuring Object dan Array
[
    {
        id: 1,
        name: "Martis",
    },
    {
        id: 3,
        name: "Zilong",
    }
]; // JSON
// Destructuring Object
const profile = {
    fullName: "martis",
    age: 34,
    skinColor: "white",
    gender: "male",

}
const { fullName, age, skinColor } = profile; // deklarasi variable destructuring object (literal object {})
console.log(fullName, age, skinColor);
console.log('');
// Destructuring assignment
let gender = "female"; // deklarasi variable
({ gender } = profile); // menginisialisasi nilai baru melalui destructuring object
console.log(gender);
console.log('');
// Default Values
const { isMarried } = profile; // mendestruksikan object variable yg tdak ada dalam object
console.log(isMarried); // maka hisilnya undefined
console.log('');
const { isHero = true } = profile; // alternatif untuk mendefinisikan nilai default
console.log(isHero);
console.log('');
// Assigning to Different local variable names
const {fullName: localFullName, age: localAge, skinColor: localSkinColor} = profile; // memberi nama variable beda dgn property object
console.log(localFullName, localAge, localSkinColor);
console.log('');
//
// Destructuring Array
let gameMoba = ["Mobile_legends", "Free_fire", "Pubg_mobile", "COC"];
const [firtsGame, secondGame, thirdGame, fourGame] = gameMoba; // deklarasi variable destructuring
console.log(firtsGame, secondGame, thirdGame, fourGame);
console.log('');
const [, , thirdGameMobile] = gameMoba; // mengambil nilai dari array gameMoba index ke 2 
console.log(thirdGameMobile);
console.log('');
// Destructuring assignment
let favGame = "Domino";
[favGame] = gameMoba; // menginisialisasi nilai baru melalui destructuring array
console.log(favGame);
console.log('');
// Default values
const [, , , , fiveGame] = gameMoba; // mendestruksikan array value yg tdak ada dalam index array
console.log(fiveGame); // maka hasilya undefined
console.log('');
const [, , , , fiveGameMoba = "Cod_mobile"] = gameMoba; // alternatif untuk mendefinisikan nilai default
console.log(fiveGameMoba);
console.log('');

///
// Map
const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a Number key'],
    [true, true]
]);
console.log(myMap);
console.log('');
const capital = new Map([
    ['Jakarta', 'Indonesia'],
    ['London', 'England'],
    ['Tokyo', 'Japan']
]);
console.log(capital.size); // Fitur map untuk mengtahui panjang map tersebut (fitur map lainnya seperti .has dan .delete)
console.log(capital.get('London')); // Mengakses nilai elemen dalam map
capital.set('New Delhi', 'India'); // Menambahkan elemen / key dan value baru dalam map
console.log(capital.size);
console.log(capital.get('New Delhi')); // Mengakses nilai elemen baru ke dalam map
console.log('');

///
// Set
const numberSet = new Set([1, 4, 6, 4, 1]); // set of values, tidak berurutan dan unik tdak ada duplikat
console.log(numberSet);
numberSet.add(5); // function untuk menambahkan data ke dalam Set
console.log(numberSet);
console.log('');

///
// WeakMap & WeakSet
const visitsCountMap = new WeakMap(); // map yang mendukung garbage collection
const visitsCountSet = new WeakSet(); // set yang mendukung garbage collection


