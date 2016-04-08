var express = require('express');
var app = express();

// var parser = require('body-parser');
// app.use(parser.json());

//host static files
app.use(express.static(__dirname + '/client/'));

//connect to routes.js
var router = require('./server/routes.js');


app.listen(3000, function(){
	console.log('server is on.')

});