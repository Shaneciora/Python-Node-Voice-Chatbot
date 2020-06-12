var express = require('express');
var axios = require('axios');

var app = express();

app.set('view engine', 'pug');

// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
	axios({
  	method: 'get',
  	url: 'http://localhost:5000/get?msg=test1',
  	responseType: 'stream'
	})
  .then(function (response) {
		var data = JSON.parse(response.data);
		console.log(data);
    //response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  });

	res.render('index');
})

var server = app.listen(5000, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
