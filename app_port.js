const http = require('http');

//function keyword approuch 
const server = http.createServer((req,res) => {
console.log(req);
process.exit();
});

//port number any port can use
server.listen(8000);