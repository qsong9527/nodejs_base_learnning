let fs = require('fs');

fs.readFile('text_resource.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }  else {
        console.log(data.toString());
    }
});

console.log("Running Here");