// console.log('Hello World')
// console.log (17 +25)

const http = require ('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer ((req, res) => {
    res.statusCode =200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
    console.log('Server runner at http://${hostname}:${port}/');
});