const express = require('express');
const service = require('./service');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const response = await service.getHelloWorld();
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error occurred');
    }
});

module.exports = router;
