// importing http core module
const http = require('http');

// some other required variable
const hostname = "localhost";

// default port
const port = '3000';

// creating server 
const server = http.createServer((res, req) => {
    console.log(req.header);

    req.statusCode = 200;
    req.setHeader('Content-type', 'text/html');
    req.end('<html><body>Rock on, hain ye waqt ka ishara</body></html>');
})

// start the server
server.listen(port, hostname, () => {
    console.log(`Our Url is https://${hostname}/${port}`);
});