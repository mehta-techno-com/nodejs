const http = require('http');

//function keyword approuch 
const server = http.createServer((req,res) => {
res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<p> Node js server</p>');
res.write('</html>');
res.end();
});

//port number any port can use
server.listen(8000);