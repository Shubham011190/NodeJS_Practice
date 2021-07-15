const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end(`Welcome to our homepage!`);
    }
    if(req.url === '/about'){
        res.end('Here is a brief about us');
    }
    res.end(`
    <h1>Oops!</h1>
    <p>Seems like we cannot find the requested page.</p>
    <br>
    <a href="/">Back home</a>\
    `);
})
server.listen(5000);