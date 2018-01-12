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
  usernameField: 'email',
  passReqToCallback : true
},
  function(req, username, password, done) {
    models.User.findOne({
      where: 
      {
        email: username,
        password: password
      }
    }).then(function(user, err) {
      if(user != null) {
        req.flash('message', 'Successful Login!');
        done(null, user.dataValues);
      } else {
        done(null, false);
      }
    });
}));

router.get('/', (req, res, next) => {
    if(!req.user)
    {
      req.flash('message', 'Unsuccessful Login...');
      return res.redirect('/login');
    }
});

router.post("/login", passport.authenticate("local", { successRedirect: "/", failureRedirect: "/auth"}));

router.get("/logout", (req, res, next) => {
  req.flash('message', 'Goodbye, ' + req.user.firstName + '! Come back soon.');
  req.logout();
  return res.redirect('/');
});

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

router.post('/update', (req, res, next) => {
  models.User.findOne({
      where: 
      {
        id: req.user.id
      }
        }).then(function(user, err) {
          console.log(user);
          user.update({
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
});

module.exports = router;