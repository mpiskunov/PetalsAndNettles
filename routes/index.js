var express = require('express');
var router = express.Router();
states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
	
/* GET index page */
router.get('/', (req, res, next) => {
  return res.render('partials/index', { title: 'Petals & Nettles', req: req });
});

/* GET about page */
router.get('/about', (req, res, next) => {
	if(req.user)
		console.log('user in about page');
  return res.render('partials/about', { title: 'About Us', req: req });
});

/* GET shop page */
router.get('/shop', (req, res, next) => {
  return res.render('partials/shop', { title: 'The Shop', req: req });
});

/* GET login page */
router.get('/login', (req, res, next) => {
	return res.render('partials/login', { title: 'Login/Sign-up', states: states, req: req });
});

/* GET account page */
router.get('/account', (req, res, next) => {
	if(req.user)
		return res.render('partials/account', { title: 'Account Settings', states: states, req: req });
	else
		return res.redirect('/');
});

module.exports = router;