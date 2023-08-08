///
let firstName = 'Heru';
let lastName = 'Setiawan';
let fullName = firstName +' '+ lastName;
console.log (fullName);
///
let nilai = 90;
if (nilai >= 70) {
   console.log ('Nilai anda ' +nilai);
} else {
   console.log ('Nilai anda kurang dari 70');
}
///
for (let i=0; i<=3; i++) {
   console.log (i);
}
///
const PI = 3.14;
function luasLingkaran (jariJari) {
   result = PI * (jariJari * jariJari); 
   return result;
}
console.log (luasLingkaran (4));
///
const Person = {
   fullName: 'Heru Setiawan', 
   age: 27, 
   isMarried: false,
   skinColor: 'Coklat', 
   favFood: 'Bakso', 
}
console.log (Person);
console.log (Person.favFood);
const person = ({fullName, age, isMarried, skinColor, favFood} = Person);
console.log (person);
///
const Users = ['Heru', 'Martis', 'Zilong', 'Balmond'];
console.log (Users);
console.log (Users[2]);
///
class Smartphone{
   constructor (brand, tipe, ram, color) {
      this.brand = brand;
      this.tipe = tipe;
      this.ram = ram;
      this.color = color;
      this._seriesNumber = this._generateSeriesNumber();
   }
   get seriesNumber () {
      return this._seriesNumber;
   }
   set seriesNumber (seriesNumber){
      console.log ('Cannot change this property');
   }
   _generateSeriesNumber () {
      return `${this.brand}-${Math.floor(Math.random()*1000)}`;
   }
   playMusic () {
      console.log (`${this.seriesNumber} playing music`);
   }
}
const Redmi = new Smartphone ('Redmi', 'Note8', '4GB', 'Black ');
console.log (Redmi);
console.log (Redmi.seriesNumber);
Redmi.seriesNumber = 'Redmi-1';
console.log (Redmi.seriesNumber);
Redmi.playMusic();
///
const CountDown = start => {
   console.log (start);
   if (start > 0) CountDown (start-1);
}
CountDown (10);
///
try {
   console.log ('Hello');
   Greeting;
   console.log ('World!');
} catch (error) {
   console.log ('Error Detect');
   console.log (error.name);
   console.log (error.message);
   console.log (error.stack);
}
///
console.log ('Halo');
setTimeout (() => {
   console.log ('Goodbye');
}, 3000);
console.log ('Wellcome');
///

const users = ['Heru', 'Martis', 'Zilong'];
users[2] = 'Balmond';
users[3] = 'Freya';
delete users[1];
users.push('Franco','Tigreal', 'Hilda');
console.log (users);

for (let i=0; i<users.length; i++) {
   console.log (users[i]);
}

for (user of users) {
   console.log (user);
}