// Latihan Asynchronous Process
// setTimeout Function
console.log('Selamat datang!');
setTimeout(() => {
console.log('Terima kasih sudah mampir, silakan datang kembali!');
}, 3000)
console.log('Ada yang bisa dibantu?');


// Asynchronous Handling Pola Callback
function getUsers (isOffline, callback) {
   // simulate network delay
setTimeout (() => {
    const user = ['Heru', 'Martis', 'Zilong'];
    if(isOffline) {
        callback (new Error('cannot retrieve users due offline'), null);
        return;
    }
    callback (null, user);
}, 4000);
}
function usersCallback (error, users) {
if (error) {
    console.log('process failed:', error.message);
    return;
}
console.log('process success:', users); 
}
getUsers (false, usersCallback);
getUsers (true, usersCallback)

// Callback Hell 
/////////////////

// Asynchronous Handling Promise
function getUsers1(isOffline) {
  // return a promise object
return new Promise((resolve, reject) => {
    // simulate network delay
setTimeout(() => {
    const users = ['Balmond', 'Franco', 'Tigreal'];
    if (isOffline) {
        reject(new Error('cannot retrieve users due offline'));
        return;
    }
    resolve(users);
    }, 5000);
});
}
getUsers1(false)
.then(users => console.log(users))
.catch(err => console.log(err.message));
getUsers1(true)
.then(users => console.log(users))
.catch(err => console.log(err.message))

// Promisify
////////////

// Promise Berantai
function withDrawMoney(amount) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (amount > 100) {
        reject(new Error('Not enough money to withdraw'));
    }
    resolve(amount);
    }, 1000);
});
}
function buyCinemaTicket(money) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (money < 10) {
        reject(new Error('not enough money to buy ticket'));
    }
    resolve('ticket-1');
    }, 1000);
});
}
function goInsideCinema(ticket) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (!ticket) {
        reject(new Error('no ticket'));
    }
    resolve('enjoy the movie');
    }, 4000);
});
}
function watchMovie() {
withDrawMoney(10)
    .then((money) => {
    return buyCinemaTicket(money);
    })
    .then((ticket) => {
    return goInsideCinema(ticket);
    })
    .then((result) => {
    console.log(result);
    })
    .catch((error) => {
    console.log(error.message);
    });
}
watchMovie()
 
// Promise Static Method
// Promise.all
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 7000));
Promise.all([promise1, promise2, promise3]).then((values) => console.log(values))
 
// Promise.race
const promise1_1 = new Promise((resolve) => setTimeout(() => resolve(1), 8000));
const promise2_1 = new Promise((resolve) => setTimeout(() => resolve(2), 9000));
const promise3_1 = new Promise((resolve) => setTimeout(() => resolve(3), 9000));
Promise.race([promise1_1, promise2_1, promise3_1])
.then((value) => console.log(value))
 
// Promise.allSettled
const promise1_2 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2_2= new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error")), 2000));
const promise3_2 = new Promise((resolve) => setTimeout(() => resolve(3), 9000));
Promise.allSettled([promise1_2, promise2_2, promise3_2])
.then((results) => console.log(results))
 
// Promise.any 
const promiseResolve1 = new Promise((resolve, reject) => setTimeout(() => resolve("1"), 10000));
const promiseResolve2 = new Promise((resolve, reject) => setTimeout(() => resolve("2"), 11000));
const promiseResolve3 = new Promise((resolve, reject) => setTimeout(() => resolve("3"), 11000));
Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
 .then((value) => console.log(value)) // 1
.catch((error) => console.log(error.message));

const promiseReject1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('1')), 1000));
const promiseReject2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('2')), 2000));
const promiseReject3 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("3")), 11000));
Promise.any([promiseReject1, promiseReject2, promiseReject3])
.then((value) => console.log(value))
.catch((error) => console.log(error.message))
 

// Asynchronous Handling dengan Sintaks Async dan await
function withDrawMoney1(amount) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (amount > 100) {
        reject(new Error('Not enough money to withdraw'))
    }
    resolve(amount)
    }, 1000);
});
}
function buyCinemaTicket1(money) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (money < 10) {
        reject(new Error('not enough money to buy ticket'))
    }
    resolve('ticket-1')
    }, 11000);
});
}
function goInsideCinema1(ticket) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (!ticket) {
        reject(new Error('no ticket'))
    }
    resolve('enjoy the movie')
    }, 1000);
});
}
async function watchMovie1(amount) {
try {
    const money = await withDrawMoney1(amount);
    const ticket = await buyCinemaTicket1(money);
    const result = await goInsideCinema1(ticket);
    return result;
} catch (error) {
    throw error;
}
}
watchMovie1(10)
    .then((result) => console.log(result)) // enjoy the movie
    .catch((error) => console.log(error.message));
watchMovie1(5)
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));