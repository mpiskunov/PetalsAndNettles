var express = require('express');
var router = express.Router();

/* GET index page */
router.get('/', function (req, res, next) {
	if(req.user)
		console.log(req.user);
  res.render('partials/index', { title: 'Petals & Nettles', message: 'Hello there! I am the index' });
});

/* GET about page */
router.get('/about', function (req, res) {
	if(req.user)
		console.log('user in about page');
  res.render('partials/about', { title: 'About Us', message: 'Hello there! I am the about' });
});

/* GET shop page */
router.get('/shop', function (req, res) {
  res.render('partials/shop', { title: 'The Shop', message: 'Hello there! Get ready to shop' });
});

/* GET login page */
router.get('/login', function (req, res) {
	states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
	res.render('partials/login', { title: 'Login/Sign-up', message: 'Hello there! Get ready to login/sign-up', states: states });
});

module.exports = router;