var http = require('http');
var a = 10;
var b = 30;
var c = a + b;
var sum = "value of a " + a + "value of b " + b + "sum of a and b " + c;

var Server = http.createServer(function (req, res) {

    res.end("sum of all three valiable " + sum);
}).listen(7000);

console.log("start http://127.0.0.1:6000/")