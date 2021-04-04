function madlib(name, subject) {
    name = "Taylor";
    subject = "Science";
    return name + "'s favorite subject in school is " + subject;

}

//console.log(madlib());


function tipAmount(bill, service) {
    if (service == 'good') {
        rate = 0.20;
        tip = rate * bill;
        console.log("You did a " + service + " job!  Here is your tip of $" + tip);
    }
    else if (service == 'fair') {
        rate = 0.15;
        tip = rate * bill;
        console.log("You did a " + service + " job!  3.6 Not great not terrible...Here is your tip of $" + tip);
    }
    else if (service == 'bad') {
        rate = 0.10;
        tip = rate * bill;
        console.log("You did a " + service + " job!  Time to find a new career...Here is your tip of $" + tip);
    }
}

//tipAmount(100, 'bad');

function totalAmount(bill, service) {
    if (service == 'good') {
        rate = 0.20;
        tip = rate * bill;
        total = tip + bill;
        console.log("You did a " + service + " job!  Here is your total of $" + total);
    }
    else if (service == 'fair') {
        rate = 0.15;
        tip = rate * bill;
        total = tip + bill;
        console.log("You did a " + service + " job!  3.6 Not great not terrible...Here is your total of $" + total);
    }
    else if (service == 'bad') {
        rate = 0.10;
        tip = rate * bill;
        total = tip + bill;
        console.log("You did a " + service + " job!  Time to find a new career...Here is your total of $" + total);
    }
}

//totalAmount(100, 'fair');

function printNumbers(n, m) {

    for (n == 0; n <= m; n++) {
        console.log(n)
    }
}

//printNumbers(1, 10);

function printNumbers2(n, m) {
    while (n <= m) {
        console.log(n);
        n = n + 1;
    }
}

//printNumbers2(1, 10);


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


//Come back to later
function printBox(n, m) {
    var length = n;
    var width = m;
    for (i = 0; i < length; i++) {
        for (j = 0; j < width; j++) {
        } if (i == 0 || i == length || j == 0 || j == width) {
            console.log("*".repeat(j));
        } else {
            console.log(" ");
        }
        //console.log("*".repeat(j));
    }
}
//printBox(5, 5);





//come back to later
function printBanner(x) {
    var text = x;
    var star = "*";
    for (star = 0; star < text; star++) {
        for (j = 0; j < star; j++) {
            console.log("*".length(j));
        }
    }
}



printBanner("hello");


function leetspeak(x) {
    var text = x;
    if (x = "a") {

    } else if (x = "g") {

    } else if (x = "g") {

    } else if (x = "l") {

    } else if (x = "o") {

    } else if (x = "s") {

    } else if (x = "t") {

    }
}
