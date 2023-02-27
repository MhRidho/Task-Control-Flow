const printSegitiga = (panjang) => {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    console.log(hasil)
}
printSegitiga(7);