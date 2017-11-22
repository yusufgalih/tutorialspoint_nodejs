/* Hello, World! program in node.js */
//console.log("Hello, World!")

//-----------------------------------
//coba server

var http = require("http");
http.createServer(function (request, response){
    // send the Http header
    // HTTP Status: 200 : OK
    // Content Type : text/plain
    response.writeHead(200, {'Content-Type' : 'text/plain'});

    // Send the response body as "Hello World"
    response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server runnning at http://127.0.0.1:8081/');