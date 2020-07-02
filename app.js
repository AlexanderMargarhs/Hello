const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;


const server = http.createServer((request, response) =>
{
    const {headers, method, url} = request;
    let body = [];
    var res = {answer: "Hello World!"}; // Create JSON.
    request.on('error', (err) => // In case something breaks.
    {
        console.error(err.stack);
    });

    response.statusCode = 200; 
    response.setHeader('Content-Type', 'application/json');

    response.write(JSON.stringify(res.answer)); // Response message.
    response.end();
    
}).listen(port); // Listen on port 8080.