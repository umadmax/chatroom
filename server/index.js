/*
 * Require
 */
var express = require('express');
var join = require('path').join;
var Server = require('http').Server;
var socket = require('socket.io');


/*
 * Vars
 */
var app = express();
var server = Server(app);
var io = socket(server);

var indexPath = join(__dirname, '..', '/public/index.html');
var assetsPath = join(__dirname, '..', 'public');


/*
 * Express
 */
// Static files
app.use(express.static(assetsPath, { index: false }));

// Route
app.get('/', function(req, res) {
  res.sendFile(indexPath);
});


/*
 * Socket.io
 */
let id = 0;
io.on('connection', function(socket) {
  socket.on('send_message', function(message) {
    message.id = ++id;
    io.emit('send_message', message);
  });
});


/*
 * Server
 */
server.listen(3000, function() {
  console.log('listening on *:3000');
});
