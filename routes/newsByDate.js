const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

router.get('/articlesByDate', async (req, res) => {
    try {
        const articles = await Article
            .find({
                published: true
            })
        const arr = articles.filter((prom) => {prom.datePublished.getMonth() === req.body.month})
        if(arr.length === 0) {
            arr = ['nema vesti sa tim datumom']
        }
        res.status(200).json(arr);
    }
    catch(err) {
        res.send(err)
    }
})

module.exports = router;