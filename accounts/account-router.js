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

router.get('/:id', (req, res) => {
    // select * from accounts where id = :id
    db.select('*')
    .from('accounts')
    .where({ id: req.params.id })
    .first() // grab the first item on the returned array
    .then(acc => {
        res.status(200).json(acc)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ error: 'failed to get the account by ID' });
    });
});

router.post('/', (req, res) => {
    // add a account
    const accInfo = req.body
    db('accounts').insert(accInfo, 'id') // will generate a warning on console whrn using sqlite, ignore that
    .then(acc => {
        res.status(201).json(acc)
    })
    .catch(err => {
        res.status(500).json({ error: 'failed to add account' })
    })
});

router.put('/:id', (req, res) => {
    // update account
    const id = req.params.id
    const changes = req.body
    db('accounts')
    .where({ id })
    .update(changes)
    .then(acc => {
        res.status(200).json(acc)
    })
    .catch(err => {
        res.status(500).json({ error: 'failed to update the account' })
    })
});

// router.delete('/', (req, res) => {})

module.exports = router;