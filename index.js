const http = require('http');

const server = http.createServer((req, res)=>{
    res.end("server is up and running");
})
server.listen(8000,()=>{
    console.log("The server is running");
    console.log("mission successful");
});