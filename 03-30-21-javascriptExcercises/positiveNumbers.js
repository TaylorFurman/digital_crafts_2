
//found via google search
function positiveNumbers(x){
    while (x.length && x[x.length - 1] < 0) {
        x.pop();
     }
     for (var i = x.length - 1; i >= 0; i--) {
        if (x[i] < 0) {
           // replace this element with the last element (guaranteed to be positive)
           x[i] = x[x.length - 1];
           x.pop();
        }
     }
     console.log(x);


}

positiveNumbers([-1, 3, -4, 5, -6]);