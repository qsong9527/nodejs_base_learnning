var fs = require('fs');
var data = "hello nodejs stream";

var writestream = fs.createWriteStream('output.txt');

writestream.write(data, 'utf8');

writestream.end();

writestream.on('finish', function () {
    console.log('stream write finished.');
});

writestream.on('close', function () {
    console.log('write stream closed');
});

console.log("Finished.");
