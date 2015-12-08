var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var db = require('./config/db');

var port = process.env.PORT || 8080;

//mongoose.connect(db.url);

//add in bodyParser and methodOverride stuff once relevant
//app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

require('./app/routes')(app);

app.listen(port, function(){
  console.log("****listening on port 8080******");
});

exports = module.exports = app;
