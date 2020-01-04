//var http = require('http'); // Just importing some functionality we need which gives access to:
// Writing a Server
// NodeJS is a Runtime handling JS Files
// Listen to specific port on specific domain and handle all requests in a certain way
// Listen to incoming requests and do something with request
// Start a loop where NodeJS will continue
// Take request, Provide Response
/*
function onRequest(request, response) {
    // 200 is the code for 'ok'
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.write('Hello, Node World!');
    response.end(); // End Request
}
*/
// Require (Import) HTTP Module
// Listen to request
//http.createServer(onRequest).listen(8000); // The 'Create Server' Method set to listen to a specific port
// onRequest did not exist yet at the time of creating it. I went back and created the onRequest functuon afterwords at a previous line 
// After all previous lines are written, go to terminal and run 'node server.js' within my thisProject folder