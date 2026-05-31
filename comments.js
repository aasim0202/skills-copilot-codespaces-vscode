// Create web server
const http = require('http');
const skillsMember = require('./member');

const server = http.createServer((req, res) => {
  if (req.url === '/skills') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(skillsMember());
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});