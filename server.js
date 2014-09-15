var express = require('express');

var app = express();
var port = port = process.env.PORT || 8000;

app.set('port', port);
app.use(express.static(__dirname + '/client'));

var server = app.listen(port, function() {
  return console.log("Listening on port " + server.address().port);
});