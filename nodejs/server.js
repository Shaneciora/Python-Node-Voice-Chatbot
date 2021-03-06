var express = require('express');
var axios = require('axios');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'pug');

// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
	res.render('index', {
		textbox_default: '',
		bot_answer: ''
	});
})

app.post('/', function(req,res){
	console.log("USER: " + req.body.box_input);
	axios({
		method: 'get',
		url: 'http://localhost:5001/get?msg=' + req.body.box_input
	  })
	.then(function (response) {
	  	console.log("BOT: " + response.data.message);	
		var bot_response = response.data.message;
		res.render('index', {
			textbox_default: '',
			bot_answer: "Bot: " + bot_response
		});
	});  

})

var server = app.listen(5000, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
