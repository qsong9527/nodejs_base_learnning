var fs = require('fs');

fs.createReadStream('text_resource.txt')
    .pipe(fs.createWriteStream('output.txt'));

