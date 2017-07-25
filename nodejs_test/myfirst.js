var http = require('http');
var developers = require('./developers-module.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(developers.getAllDevelopers);
}).listen(8080);