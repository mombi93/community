var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('splash', { title: 'Techsocial' });
});

router.get('/user', function(){ return require('./controllers/userController')});

router.get('test', function(){ return require('./controllers/testController')})

module.exports = router;
