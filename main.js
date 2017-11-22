/* Hello, World! program in node.js */
//console.log("Hello, World!")

//-----------------------------------
//coba server

/*
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

*/
//-----------------------------------------------------------------

//coba event
//import event module
var events = require('events');

//create an eventEmitter object
var eventEmitter = new events.EventEmitter();

//Create an event handler as follows
var connectHandler = function connected(){
    console.log('connection succesful.');

    //Fire the data_recieved event
    eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the  anonymous function
eventEmitter.on('data_received', function(){
    console.log('data recieved succesfully.');
});

// Fire the connection event
eventEmitter.emit('connection');

console.log("Program Ended.");