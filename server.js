const express = require('express');

const AccountRouter = require('./accounts/account-router.js');

const server = express();

server.use(express.json());

server.use('/api/accounts', AccountRouter);

server.get('/', (req, res) => {
  res.send('<h3>App is up and running!!!</h3>');
});

module.exports = server;