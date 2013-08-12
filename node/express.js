// Requires
var express = require('express');
var app = express();

// Example middleware
app.use( express.bodyParser() );

// Simple GET
app.get('/', function(req, res, next) {
  res.send('It works!');
});

// Listener
app.listen(3000);
console.log('Listening on port 3000');
