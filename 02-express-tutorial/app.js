const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req);

    // console.log("User started server");
    res.writeHead(200,{'content-type': 'text/html'})
    res.write('<h1>Homepage</h1>')
    res.end()
});

server.listen(5000);