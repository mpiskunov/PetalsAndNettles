var models  = require('../models');
var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((userID, done) => {
  /* Find user that has same id in db */  models.User.findOne({
    where: {
      id: userID
    }
  }).then((user) => {
    /* Determine if the user exists*/
    if(user)
      done(null, user.dataValues);
    else
      done(null,false);
  });
});

passport.use(new LocalStrategy({
  /* Instead of looking for username in req.body,
  passport will search for req.body.email */
  usernameField: 'email'
},
  function(username, password, done) {
    models.User.findOne({
      where: 
      {
        email: username,
        password: password
      }
    }).then(function(user, err) {
      if(user != null) {
        done(null, user.dataValues);
      } else {
        /* TODO: Create flash messages */
        done(null, false);
      }
    });
}));

router.get('/', (req, res, next) => {
    res.send('invalid i hope');
});

router.get('/login', (req, res, next) => {
	res.send('route to auth');
});

router.post("/login", passport.authenticate("local", { successRedirect: "/", failureRedirect: "/auth"}));

router.post('/signup', (req, res, next) => {
	models.User.create({
	    firstName: req.body.firstName,
	    lastName: req.body.lastName,
	    address: req.body.address,
	    city: req.body.city,
	    state: req.body.state,
	    zipCode: req.body.zipCode,
	    email: req.body.email,
	    password: req.body.password
    }).then(function() {
  	    res.redirect('/');
  	  });
});

module.exports = router;