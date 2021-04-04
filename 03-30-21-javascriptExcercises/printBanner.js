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