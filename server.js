const express = require('express');

const db = require("./data/dbConfig.js");

const AccountRouter = require('./accounts/account-router');

const server = express();

server.use(express.json());

server.use('/api/accounts', AccountRouter);

server.get('/', (req, res) => {
    res.send('<h2>node-db1-project is up and running<h2>')
});

module.exports = server;
