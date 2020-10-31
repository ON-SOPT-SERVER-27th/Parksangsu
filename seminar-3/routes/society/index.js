var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res)=> {
    res.status(200).send('사회 뉴스!');
})

module.exports = router;