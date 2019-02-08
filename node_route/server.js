var http = require('http');
var app = require('./app');

http.createServer(app.handleRequest).listen(3000, 'localhost', () => {
  console.log('server running at localhost:3000');
});