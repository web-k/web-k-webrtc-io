var express = require('express');
var http = require('http');

var port = process.env.PORT || 8080;

var app = express();

app.set('port', port);
 
var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var webRTC = require('webrtc.io').listen(server);
