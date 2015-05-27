var express = require('express');
var router = express.Router();

function getController(name){
  return require('./controllers/' + name + 'Controller');
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('splash', { title: 'Techsocial' });
});

router.get('/user', getController('user'));

router.get('/test', getController('test'));

router.all('/login', getController('login'));

router.all('/signup', getController('signup'));

module.exports = router;
