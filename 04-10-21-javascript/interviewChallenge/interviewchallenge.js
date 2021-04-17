function fizzNumbers(startNumber, endNumber){
    var i;
    for(i = startNumber; i <= endNumber; i++){
        if(i %3){
            console.log("Fizz");
        } 
        else if (i %5){
            console.log("Buzz");
        }
        else if (i %3 && 1 %5){
            console.log("FizzBuzz");
        }
        else{
            console.log(i);
        }
    }
    
}

//fizzNumbers(1,100);


//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

function naturalNumbers(x){
    var i = x;
    var total = 0;
    for (i =0; i<1000; i++){
        if (i < 1000 && i % 3 ==0 || i % 5 ==0){
            i += i;
            console.log(i);
        }
    }
}
naturalNumbers()
