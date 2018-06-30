var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Login = require('../models/Login.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send('Express RESTful API');
  Login.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* Login Post */
router.post('/', function(req, res, next) {
  /* Booknew.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  }); */
  console.log(req.body.username);
  Login.findOne({ 'username': req.body.username },function (err, products) {
    if (err) return next(err);
	console.log(products);
    res.json(products);
  });
  
});


module.exports = router;


