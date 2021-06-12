//fs is a built in module for node.  Look at documentation for more info
var fs = require('fs');
const { join } = require('path/posix');
//file is given a variable to work with to open
var filename = "file.txt";
//looks at the file name variable and does a callback function to either error or buffer (Print out data)
fs.readFile(filename, function (error, buffer) {
    if (error) {
        console.error(error.message);
        return;
    }
    console.log("File Data: ", buffer.toString());
})

filename = 'file.txt';
fs.writeFile(filename, "I love node\n" , function(error){
    if (error){
        console.error(error.message);
        return;
    }
    console.log("File Save: ", filename);
})