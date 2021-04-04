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