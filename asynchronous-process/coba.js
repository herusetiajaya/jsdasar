
// UangDalamDompet (jumlah)
// beliVoucher (harga)
// loginFormWifi (voucher)
// Wifi Terkoneksi (jumlah)

function uangDalamDompet (jumlah) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (jumlah > 50) {
                reject (new Error('uang anda tdk sbnyak itu'));
            }
            resolve (jumlah);
        }, 1000);
    });
}
function beliVoucher (harga) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (harga < 5) {
                reject (new Error('uang anda kurang utk beli voucher'));
            }
            resolve (harga);
        }, 1000);
    });
}
function loginFormWifi (voucher) {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            if (!voucher) {
                reject (new Error('tdak ada voucher'));
            }
            resolve ('Wifi conn');
        }, 1000);
    });
}

async function wifiTerkoneksi (jumlah) {
    try {
        const harga = await uangDalamDompet (jumlah);
        const voucher = await beliVoucher (harga);
        const hasil = await loginFormWifi (voucher);
        return hasil;
    } catch (error) {
        throw error;
    }
}

wifiTerkoneksi (5)
.then((hasil) => console.log (hasil))
.catch((error) => console.log (error.message));

//
// 

function listHeroes (isOffline) {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            const heroes = ['Martis', 'Zilong', 'Balmond'];
            if (isOffline) {
                reject (new Error ('internet offline'));
            }
            resolve (heroes);
        }, 5000);
    });
}

async function showListHeroes (isOffline) {
    try {
        const hasil = await listHeroes (isOffline)
        return hasil;
    } catch (error) {
        throw error;
    }
}

showListHeroes (false)
.then(hasil => console.log (hasil))
.catch(error => console.log (error.message));

