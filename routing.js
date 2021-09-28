var express = require('express')
var app = express()
var port = 8000
app.get('/', function (req, res) {
    res.send('hello world')
})

app.get('/about', function (req, res) {
    res.send('about')
})

app.get('/contact', function (req, res) {
    res.send('contact')
})

app.listen(port, () => {

    console.log("app example at http://localhost:${port}")
})