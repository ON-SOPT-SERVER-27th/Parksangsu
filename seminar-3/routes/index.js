var express = require('express');
var routes = require('../routes');
var router = express.Router();

router.use(routes.users, require('./users'));
router.use('/ranking', require('./ranking'));
router.use('/society', require('./society'));
router.use('/members', require('./members'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
