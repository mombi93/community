var User = require('../../models/User.js');
var express = require('express');
var app = express();

exports = module.exports = function(req,res) {
  res.render('signup');
}
