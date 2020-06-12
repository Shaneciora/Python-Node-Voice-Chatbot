var express = require('express');
var axios = require('axios');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'pug');

// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {

	res.render('index');
})

app.post('/bot', function(req,res){
	console.log(req.body);
	//let input_text = JSON.parse(req.body);
	//call_bot(input_text.box_input);
})

function call_bot(user_input){
	axios({
		method: 'get',
		url: 'http://localhost:5001/get?msg=' + user_input
	  })
	.then(function (response) {
	  console.log(response.data.message);		
	});  
}

var server = app.listen(5000, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
