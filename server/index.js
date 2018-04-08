/*
 * Require
 */
const express = require('express');
const { join } = require('path');
const { Server } = require('http');
const socketIO = require('socket.io');


/*
 * Vars
 */
const app = express();
const server = Server(app);
const io = socketIO(server);

const indexPath = join(__dirname, '..', '/public/index.html');
const assetsPath = join(__dirname, '..', 'public');


/*
 * Express
 */
// Static files
app.use(express.static(assetsPath, { index: false }));

// Route
app.get('/', (req, res) => {
  res.sendFile(indexPath);
});


/*
 * Socket.io
 */
io.on('connection', (socket) => {
  socket.username = 'Anonymous';
  console.log(`${socket.username} is connected`);
  socket.on('change_username', (data) => {
    socket.username = data.username;
  });
  socket.on('send_message', (message) => {
    console.log(`New message from ${socket.username}: ${message.message}`);
    io.sockets.emit('send_message', message);
  });
});


/*
 * Server
 */
server.listen(3000, () => {
  console.log('listening on *:3000');
});
