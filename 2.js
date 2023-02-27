const fizzBuzz = (numb) => {
    for(let start = 1; start <= numb; start++){
        if(start % 3 == 0 && start % 5 == 0){
            console.log('fizz buzz')
        }else if(start % 3 == 0 ){
            console.log('buzz');
        }else if(start % 5 == 0){
            console.log('fizz');
        }else{
            console.log(start);
        }
    }
}

fizzBuzz(50);