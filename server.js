var express = require('express');
var app = express();

app.set('view engine', 'pug');


// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	res.send('Hello Wordld');
})

var server = app.listen(5000, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
