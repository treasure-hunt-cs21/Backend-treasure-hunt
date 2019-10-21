const express = require('express');

const configureMiddleware = require('./middleware.js');

const server = express();

configureMiddleware(server);

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/tickets', ticketsRouter);

server.get('/', (req, res) => {
  res.send("It's alive!");
});

module.exports = server;