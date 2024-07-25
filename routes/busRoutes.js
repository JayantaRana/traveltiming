//working properly
const express = require('express');
const router = express.Router();
const Bus = require('../models/Bus');

router.get('/search', async (req, res) => {
    const from = req.query.from;
    const to = req.query.to;

    try {
        const results = await Bus.find({ from: from, to: to });
        res.json(results);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;




