var models  = require('../models');
var express = require('express');
var router = express.Router();

router.get('/login', function(req, res) {
	res.send('route to auth');
});

router.post('/login', function(req, res, next) {
	res.send(req.body.email + " " + req.body.password);
});

router.post('/signup', function(req, res, next) {

	models.User.create({
    firstName: 'talemashu'
	  }).then(function() {
	  	console.log('user created');
	    res.redirect('/');
	  });
});

module.exports = router;