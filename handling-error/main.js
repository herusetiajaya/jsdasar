// Latihan Handling Error
// Try and Catch
try {  
    console.log ('blok 1');
    errorblok;
    console.log ('blok 3');
} catch (error) {
    console.log ('Terjadi error');
    console.log (error.name);
    console.log (error.message);
    console.log (error.stack);
}
 // try-catch-finally 
try {
console.log ("Awal blok try");
console.log ("Akhir blok try");
} catch (error) {
console.log ("Baris ini diabaikan");
} finally {
console.log ("Akan tetap dieksekusi");
}

 // Throwing Errors
 const json = '{"name": "Martis", "age": "37"}'; // no error
try {
    const user = JSON.parse(json);
    console.log (user.name);
    console.log (user.age);
} catch (error) {
    console.log (error.name);
    console.log (error.message);
}

 const json1 =  '{bad json}'; // with error
try {
    const user = JSON.parse(json1);
    console.log (user.name);
    console.log (user.age);
} catch (error) {
    console.log (error.name);
    console.log (error.message);
}

 // if Error with throw
const json2 = '{"age": "37"}';
try {
    const user = JSON.parse(json2);
    if (!user.name) {
    throw new SyntaxError("'name' is required.");
    }
    // errorCode;
    console.log (user.name);
    console.log (user.age);
} catch (error) {
    if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);
} else if (error instanceof ReferenceError) {
    console.log(error.message);
    } else {
    console.log(error.stack);
}
console.log ('on the console');
}

 // Custom Error 
class ValidationError extends Error {
constructor(message) {
    super(message);
    this.name = "ValidationError";
}
}
const json3 = '{ "age": 30 }';
try {
const user = JSON.parse(json3);
if (!user.name) {
    throw new ValidationError("'name' is required.");
}
if (!user.age) {
    throw new ValidationError("'age' is required.");
}
console.log(user.name);
console.log(user.age);
} catch (error) {
if (error instanceof SyntaxError) {
    console.log(`JSON Syntax Error: ${error.message}`);
} else if (error instanceof ValidationError) {
    console.log(`Invalid data: ${error.message}`);
} else if (error instanceof ReferenceError) {
    console.log(error.message);
} else {
    console.log(error.stack);
}
}