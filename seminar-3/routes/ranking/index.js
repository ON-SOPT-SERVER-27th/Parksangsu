var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/popular', (req, res) => {
    res.status(200).send("인기많은 뉴스");
});

router.get('/bestreply', (req, res) => {
    res.status(200).send("댓글 많은 순 뉴스");
});

router.get('/age', (req, res)=> {
    res.status(200).send("나이별 랭킹뉴스");
})

module.exports = router;