var fs = require('fs');

var filename = 'file.txt';
fs.readFile(filename, function (error, buffer){
    if (error){
        console.error(error.message);
        return;
    }
    console.log('File Data: ', buffer.toString());
});

filename = 'write-text.txt';
fs.writeFile(filename, 'I love Node\n', function (error){
    if (error){
        console.error(error.message);
        return;
    }
    console.log('File Save: ', filename);
});
