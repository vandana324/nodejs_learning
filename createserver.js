const http = require('http');

http.createServer((req,res)=>{
    res.write("this is vandana")
    res.end();

}).listen(4500)