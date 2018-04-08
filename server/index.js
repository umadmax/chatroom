/*
 * Require
 */
const express = require('express');
const { join } = require('path');
const { Server } = require('http');
const socket = require('socket.io');


/*
 * Vars
 */
const app = express();
const server = Server(app);
const io = socket(server);

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
let id = 0;
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('send_message', (message) => {
    console.log('New message : ', message);
    socket.broadcast.emit('send_message', message);
  });
});


/*
 * Server
 */
server.listen(3000, () => {
  console.log('listening on *:3000');
});
