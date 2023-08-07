///
// Object-Oriented Programming (OOP)
const smartphone = {
    // properties
    brand: 'Xiomi',
    type: 'Redmi Note',
    color: 'Black',
    harga: 2000000,
    // methods
    playMusic: () => {
        console.log('Memutar musik');
    },
    playVideo: () => {
        console.log('Memutar video');
    },
    playGame: () => {
        console.log('Jalankan game');
    }
}
console.log(smartphone.brand);
smartphone.playMusic();

// Constructor function
function laptop (brand, type, color){
    this.brand = brand;
    this.type = type;
    this.color = color;
}

laptop.prototype.playMusic = function (){
    console.log(`${this.brand} ${this.color} is Play Music`);
}
laptop.prototype.playVideo = function (){
    console.log(`${this.brand} ${this.color} is Play Video`);
}
laptop.prototype.playGame = function (){
    console.log(`${this.brand} ${this.color} is Play Game`);
}
// membuat object baru dari constructor function laptop
const laptop1 = new laptop('Acer', 'Aspire', 'black');
const laptop2 = new laptop('Lenovo', 'Thinkpad', 'red');
// jalankan salah satu method prototype
laptop1.playMusic();
laptop2.playGame();

// class on ES6
class Kipas {
    constructor (merk, warna, model) {
        this.merk = merk;
        this.warna = warna;
        this.model = model;
    }
    turnOn(){
        console.log(`${this.merk} warna ${this.warna} sedang berputar`);
    }
}
const kipas1 = new Kipas ("Panasonic", "putih", "X2RK");
console.log(kipas1);
kipas1.turnOn();
// property | data property
class Car {
    constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
       this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
    }
}
    const car1 = new Car('BMW', 'red', 200);
    console.log (car1);
    console.log (car1.chassisNumber);
    car1.chassisNumber = 'BMW-1';
    console.log (car1.chassisNumber);

// Getter dan Setter | accessor property
class User {
    constructor (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }
    get fullName (){
    return `${this.firstName} ${this.lastName}`;
    }
    set fullName (fullName){
    const [firstName, lastName] = fullName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
    }
    }
    const user = new User ('Heru', 'Setiawan');
    console.log (user);
    console.log (user.fullName);
    user.fullName = 'Martis Fighter';
    console.log (user);
    console.log (user.fullName)

// another example
class Mobil {
    constructor (brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
       this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
    }
    get chassisNumber () {
    return this._chassisNumber;
    }
    set chassisNumber (chassisNumber) {
    console.log("u can't edit this chassisNumber");
    }
    }
    const mobil1 = new Mobil ('BMW', 'Red', 200);
    console.log(mobil1.chassisNumber);
    mobil1.chassisNumber = 'BMW-1';
    console.log(mobil1.chassisNumber);


// method dan member visibility 
class Motor {
    // #nomorPlat = null; // enclosing class
    constructor (merk, warna, KecepatanMaks) {
    this.merk = merk;
    this.warna = warna;
    this.KecepatanMaks = KecepatanMaks;
    this._nomorPlat = this._acaknomorPlat();
    }
    get nomorPlat () {
        this._nomorPlat;
    }
    set nomorPlat (nomorPlat) {
        console.log ('Tidak dpt mengubah nomorPlat');
    }
       // method 
    berkendara () {
        console.log (`Motor ${this.merk} ${this.warna} Dikendarai`);
    }
    berbelok (arah) {
        console.log (`Motor ${this.merk} ${this.warna} Belok ke arah ${arah}`);
    }
    _acaknomorPlat () {
          return `${this.merk}-${Math.floor(Math.random() * 1000 )}`;
        }
    }
    const motor = new Motor ('Vario', 'Putih', 150);
    motor.berkendara();
    motor.berbelok('kanan');
    console.log (motor);
    console.log (motor._nomorPlat);
    motor.nomorPlat = 'Vario-1';
    console.log (motor._acaknomorPlat());

    // Inheritance
class layananPesan { // superclass
    constructor (pengirim) {
    this.pengirim = pengirim;
    }
    kirimPesan (pesan, penerima) {
    console.log (`${this.pengirim} mengirim ${pesan} untuk ${penerima}`);
    }
}
// subclass
class whatsappService extends layananPesan {
    sendBroadcastMessage (pesan, receivers){
    for (const penerima of receivers) {
        this.kirimPesan (pesan, penerima);
    }
    }
}
 // subclass
class emailService extends layananPesan {
    sendDelayMessage (pesan, penerima, delay) {
    setTimeout(() => {
        this.kirimPesan (pesan, penerima);
    }, delay);
    }
}
const whatsApp = new whatsappService ('0851');
const email = new emailService ('heru@g');
whatsApp.kirimPesan ('hai', '0854');
whatsApp.sendBroadcastMessage('hai', ['0852','0853']);
email.kirimPesan ('hello', 'martis@g');
// email.sendDelayMessage ('hello', 'zilong', 3000);
// operator instanceof
console.log (whatsApp instanceof whatsappService);
console.log (whatsApp instanceof emailService);
// Overriding
class MailService {
    constructor (sender) {
    this.sender = sender;
    }
    sendMessage (send, receiver){
    console.log (`${this.sender} sent ${send} to ${receiver}`);
    }
}
class WhatsAppService extends MailService {
    // overriding constructor
    constructor (sender, isBusiness) {
    super(sender);
    this.isBusiness = isBusiness;
    }
    // overriding method
    sendMessage (send, receiver) {
    console.log (`${this.sender} sent ${send} to ${receiver} via WhatsApp Business`);
    }
}
const mail = new MailService ('0855');
const WhatsApp = new WhatsAppService ('0857');
mail.sendMessage ('Woiy', '0856');
WhatsApp.sendMessage ('Woy', '0858');
 // Object Composition
 // Built-in class