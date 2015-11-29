var express = require('express');
var middleware = require('./middleware.js');

var app = express();
var PORT = 3000;
app.use(middleware.logger);

app.get('/about',middleware.requiresAuthentication, function(req,res) {
  res.send("About us");
});

app.use(express.static(__dirname +'/public'));

app.listen(PORT, function() {
  console.log("Express server started on port: " +PORT);
});