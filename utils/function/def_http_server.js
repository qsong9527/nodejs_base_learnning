var http = require('http');

function request_listener(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Hello Nodejs Server");
    response.end();
}

http.createServer(request_listener).listen(9000);