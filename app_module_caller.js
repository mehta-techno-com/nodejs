const http = require('http');

const routes = require('./app_module_route.js');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);
