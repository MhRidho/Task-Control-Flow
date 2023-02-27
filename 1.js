const angka = (numb) => {
    for(let start = 1; start <= numb; start++){
        if(start % 2 != 0){
            console.log(start);
        }
    }
}

angka(100);