const http = require('http');

// http.createServer((req,res) => {
//     res.end("Hello. I am your First Server");
// }).listen(3000);
const port = 3000;
const hostname = '127.0.0.1'
const myServer = http.createServer((req,res) => {
    //res.end("<h1> Hello, I am Your First Server </h1>");
    res.writeHead(202, {'content-Type':'text/html'});
    res.write("<h2> Hello </h2>");
    res.end();
});

myServer.listen(port, hostname, ()=>{
    console.log(`Server is Running Successfully at http://${hostname}:${port}`);
});