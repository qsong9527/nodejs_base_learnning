// Import fs module
let fs = require('fs');

// Read file as Sync mode
let data = fs.readFileSync('text_resource.txt');

// Print file content.
console.log(data.toString());
console.log("Game Over");
