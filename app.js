const http = require('http');
function rqListner(req, res)
{
    console.log(req);
    //process.exit();
}

const server = http.createServer(rqListner(http.req,http.res));
server.listen('8000');


