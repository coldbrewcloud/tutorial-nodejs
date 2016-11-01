const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    let message = process.env.MESSAGE || 'Hello, World';
    let contentType = process.env.CONTENT_TYPE || 'text/plain';

    res.statusCode = 200;
    res.setHeader('Content-Type', contentType);
    res.end(message + '\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
