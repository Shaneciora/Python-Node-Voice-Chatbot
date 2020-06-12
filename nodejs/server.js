var express = require('express');
var axios = require('axios');

var app = express();

app.set('view engine', 'pug');

// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {

	res.render('index');
})

app.get('/bot', function(req, res){
	axios({
		method: 'get',
		url: 'http://localhost:5001/get?msg=test1'
	  })
	.then(function (response) {
	  console.log(response.data.message);		
	});  
}


)

var server = app.listen(5000, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
