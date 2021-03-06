var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set Static Path
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
	var title = 'Customers';
	res.render('index', {
		title: 'Customers'
	});
});

app.listen(3000, function(){
	console.log('Server Started on Port 3000...');
});
