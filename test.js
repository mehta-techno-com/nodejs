const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    
    if (req.url === '/message' && req.method === 'POST') {
        const body = [];
        
        req.on('data', (chunk) => {
            //console.log(chunk);
            body.push(chunk);
            //console.log(body);
          });

          req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
          });

          res.statusCode = 302;
          res.setHeader('Location', '/');
          return res.end();
        
        res.write('<html>');
        res.write('<head><title>Node js form </title><head>');
        res.write('<body> message recevied</body>');
        res.write('</html>');
        return res    }
    else if(req.url === '/')
    {
    res.write('<html>');
    res.write('<head><title>Node js form </title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    res.end();
    }
});
server.listen('8000');
