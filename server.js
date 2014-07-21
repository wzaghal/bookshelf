'use strict'

//Load Modules
var mongoose = require('mongoose'),
	express = require('express'),
	bodyParser = require('body-parser');

//Express setup
var app = express();
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//Start server
app.listen( app.get('port'),function(){
	console.log('Listening on port: ' + app.get('port'));
});
