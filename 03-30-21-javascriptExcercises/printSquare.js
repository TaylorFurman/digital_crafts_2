function printSquare(n) {
    var size = n;
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {

        }
        //not sure why this works
        console.log("*".repeat(j));
    }
    //console.log("*".repeat(i), "*".repeat(j)); //original attempt, creates second block of *
}

//printSquare(10);