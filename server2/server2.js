const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from Server 2!\n');
});

server.listen(3002, '127.0.0.1', () => {
  console.log('Server 2 is running on http://127.0.0.1:3002/');
});
