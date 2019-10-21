const express = require('express');

const configureMiddleware = require('./middleware.js');
const roomsRouter = require('../rooms/rooms-router.js');

const server = express();

configureMiddleware(server);

server.use('/api/rooms', roomsRouter);

server.get('/', (req, res) => {
  res.send("It's alive!");
});

module.exports = server;