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