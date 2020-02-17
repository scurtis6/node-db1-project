const express = require('express');

const db = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', (req, res) => {
    db.select('*')
    .from('accounts')
    .then(acc => {
        res.status(200).json(acc)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ error: 'failed to get the list of accounts' });
    });
});
// router.get('/', (req, res) => {})
// router.post('/', (req, res) => {})
// router.put('/', (req, res) => {})
// router.delete('/', (req, res) => {})

module.exports = router;