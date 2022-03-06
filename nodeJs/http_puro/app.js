var http = require('http')

http.createServer(function(req, res){
    res.end("My page")
}).listen(8081)

console.log("servidor rodando")
