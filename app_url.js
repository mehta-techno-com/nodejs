const http = require('http');

//function keyword approuch 
const server = http.createServer((req,res) => {
//console.log(req.headers, req.url, req.method);
//Header will full data
//console.log(req.header);
//URL value will be after port number
console.log(req.url);

});

//port number any port can use
server.listen(8000);