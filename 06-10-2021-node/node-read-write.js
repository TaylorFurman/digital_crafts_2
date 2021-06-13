var fs = require('fs');

var filename = 'file.txt';

fs.readFile(filename, function (error, buffer) {
    if (error){
        console.error(error.message);
        return;
    }
    var contents = buffer.toString();
    var backwards = contents.split('').reverse().join('');
    fs.writeFile(filename + '.back', backwards, function (error){
        if (error){
            console.error(error.message);
            return;
        }
        console.log('File Save: ', filename + '.back');
    });
});