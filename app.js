var express = require('express');
var http = require('http');

var port = process.env.PORT || 8080;

var app = express();

app.set('port', port);
 
var server = http.createServer(app);

var webRTC = require('webrtc.io').listen(port);
