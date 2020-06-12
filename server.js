import {PythonShell} from 'python-shell';


var express = require('express');
var app = express();

let options = {
  mode: 'text',
  pythonPath: 'scripts/py',
  pythonOptions: ['-u'], // get print results in real-time
  scriptPath: 'path/to/my/scripts',
  args: ['how are you?']
};


app.set('view engine', 'pug');




PythonShell.run('bot.py', options, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log('results: %j', results);
});


// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	res.render('index');
})

var server = app.listen(5000, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
