let server = require('./server');
let route = require('./route');

server.start(route.route);