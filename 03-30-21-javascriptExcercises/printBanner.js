//come back to later
/*function printBanner(x) {
    var text = x;
    var star = "*";
    for (star = 0; star < text.length; star++) {
        for (j = 0; j < star; j++) {
            console.log("H".repeat(text.length));
        }
    }
}


printBanner("hello world");
*/

console.log("");

var star = "*";
function printBanner(string) {
    var row = "";
    for (let i = 0; i <string.length; i++){
        row += "*"
    }
    row +="****"
    console.log(row);
    console.log(star, string, star);
    console.log(row);
    
}
printBanner("fjdkslfjdl;safj;lsad");
