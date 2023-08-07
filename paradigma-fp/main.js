// Latihan Paradigma Functional Programming
// gaya deklaratif / what to solve
const names = ['Heru', 'Martis', 'Zilong', 'Balmond'];
const newNameWithExMark = names.map ((name) => ` ${name} !`);
console.log (newNameWithExMark);
// gaya imperatif / how to solve
const names1 = ['Alucard', 'Saber', 'Miya', 'Layla'];
const newNameWithExcMark1 = [];
for (let i=0; i<names1.length; i++) {
newNameWithExcMark1.push(` ${names1[i]} !`);
}
console.log (newNameWithExcMark1);
// Pure Function
const hitungLuasLingkaran = (jariJari) => {
   return 3.14 * (jariJari * jariJari );
}
console.log (hitungLuasLingkaran(4));
// Immutability
const user = {
firsName: 'Heru', 
lastName: 'Settia', 
}
const createUserWithNewlastName = (newLastName, user) => {
return {...user, lastName: newLastName}
}
const newUser = createUserWithNewlastName ('Setiawan', user);
console.log (newUser.lastName);
// Rekursif
const countDown = start => {
console.log (start);
if(start > 0) countDown(start-1);
};
countDown(10);

// Higher-Order Functional
const names2 = ['Franco', 'Tigreal', 'Minotour', 'Lolita'];
const arrayMap = (arr, action) => {
const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr[index];
    if(!item) return newArray;
    return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
}
return loopTrough(arr, action);
}
const newNames = arrayMap(names2, (name) => ` ${name}!` );
console.log({
names2,
newNames,
})
console.log (names2);
console.log (newNames);

// Reusable Function
// Array map
const nama = ['Alice', 'Natali', 'Eudora', 'Lesly'].map((name) => {return ` ${name}!`});
console.log (nama);

// Array filter
const truthyArray = [1, '', 'Hallo', 0, null, 'Johnson', 14].filter((item) => Boolean(item));
console.log (truthyArray);
// another example
const students = [
{
    name: 'Harry',
    score: 60,
},
{
    name: 'James',
    score: 88,
},
{
    name: 'Ron',
    score: 90,
},
{
    name: 'Bethy',
    score: 75,
}
];
const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
console.log (eligibleForScholarshipStudents);
// Array reduce
const students1 = [
{
    name: 'Harry',
    score: 60,
},
{
    name: 'James',
    score: 88,
},
{
    name: 'Ron',
    score: 90,
},
{
    name: 'Bethy',
    score: 75,
}
];
const totalScore = students1.reduce((acc, student) => acc + student.score, 0);
console.log(totalScore);
// Array some
// Array find 
// Array sort
// Array every
// Array forEach