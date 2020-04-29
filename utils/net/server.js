let http = require("http");
let url = require("url");

function start(route) {
    
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        console.log("Request for %s received.", pathname);

        route(pathname);

        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write("Hello Nodejs");
        response.end();
    }

    http.createServer(onRequest).listen(9000);
    console.log("Server has started at: http://127.0.0.1:9000/");
}

exports.start = start;