// Make a Server, Nodemon Install & Routing 
const fs = require('fs');
const http = require('http');
const PORT = 3000;
const hostName = '127.0.0.1';

const server = http.createServer((req, res) => {

    // Last of all Added this Condition
    const handleReadFile = (statusCode, fileLocation) => {
        fs.readFile(fileLocation, (err, data) => {
        res.writeHead(statusCode, { "content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    }


    // Routing
    if(req.url === "/"){
        
        handleReadFile(200, "./views/index.html");

    } else if(req.url === "/about"){
        handleReadFile(200, "./views/about.html");
        // fs.readFile("./views/about.html", (err, data) => {
        //     res.writeHead(200, { "content-Type": "text/html" });
        //     res.write(data);
        //     res.end();
        // });
    } else if(req.url === "/contact"){
        handleReadFile(200, "./views/contact.html");
        // fs.readFile("./views/contact.html", (err, data) => {
        //     res.writeHead(200, { "content-Type": "text/html" });
        //     res.write(data);
        //     res.end();
        // });
    } else{
        handleReadFile(200, "./views/error.html");
        // fs.readFile("./views/error.html", (err, data) => {
        //     res.writeHead(404, { "content-Type": "text/html" });
        //     res.write(data);
        //     res.end();
        // });
    }
    //console.log(req.url);
    //res.end("Welcome");
});

server.listen(PORT, hostName, () =>{
    console.log(`Server is running at http://${hostName}:${PORT}`);
});