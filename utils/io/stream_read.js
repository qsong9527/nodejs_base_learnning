// import fs module
var fs = require('fs');
var data = '';

// create read stream
var readstream = fs.createReadStream('text_resource.txt');

// stream event: open
readstream.on('open', function () {
    console.log("Stream open");
})

// stream event: data <reading>
readstream.on('data', function (chunk) {
    console.log("Stream reading...");
    data += chunk;
});

// stream event: end <read finished>
readstream.on('end', function () {
    console.log("Stream read finished.");
    console.log("File content: " + data);
});

// stream event: error
readstream.on('error', function (err) {
    console.error("Stream error.");
    console.log("Error msg: " + err.stack);
});

console.log("Finished!");
