var express = require('express');
var bodyParser = require('body-parser');

//Configs
var port = process.env.PORT || 3000;

var app = express();

//Basic Routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client'));

app.get('/', function(req, res) {
  res.json({message: 'Ygrene Interview'});
});

//Listener
app.listen(port, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('MVP API listening on ' + port);
});

module.exports = app;
