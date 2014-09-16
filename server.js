var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = port = process.env.PORT || 8000;

app.set('port', port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + '/client'));

var server = app.listen(port, function() {
  return console.log("Listening on port " + server.address().port);
});