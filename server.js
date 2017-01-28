var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile('/index.html')
});

app.listen(1337, function () {
    console.log('App listening on port 1337!')
});