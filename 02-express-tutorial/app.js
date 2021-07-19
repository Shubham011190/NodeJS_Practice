const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("User started server");
});

server.listen(5000);