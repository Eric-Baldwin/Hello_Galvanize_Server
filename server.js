const http = require('http');
const HOST = '127.0.0.1';
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.end('Hello, Galvanize!');
});

server.listen(PORT, HOST, () => {
    console.log(`Server is running on ${HOST}:${PORT}`);
});
