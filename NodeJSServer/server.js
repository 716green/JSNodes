//                                                                                                                       Followed another tutorial. This server works at localhost:8000 'as-is'
var http = require('http');
function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.write('Hello, Node World!');
    response.end();
}
http.createServer(onRequest).listen(8000);

/*
https://www.youtube.com/watch?v=pKd0Rpw7O48
Server from programming with Most. Copied from:
Express.js Tutorial: Build RESTful APIs with Node and Express | Mosh

const http = require('http');
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        //...
    }

    if (req.url === '/api/courses') {
        // ...
    }
});
server.listen(3000);
*/