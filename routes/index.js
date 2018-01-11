var express = require('express');
var router = express.Router();

/* GET index page */
router.get('/', (req, res, next) => {
  res.render('partials/index', { title: 'Petals & Nettles', req: req });
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
	states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
	return res.render('partials/login', { title: 'Login/Sign-up', states: states, req: req });
});

router.get("/logout", (req, res, next) => {
  req.logout();
  return res.redirect('/');
});

module.exports = router;