const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from Node.js App on Kubernetes CI/CD Pipeline!\n');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
