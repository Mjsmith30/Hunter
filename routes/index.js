var express = require('express');
var router = express.Router();
var passport = require('passport');
var Hunter = require("../model/Hunter")



// The root route renders our only view
router.get("/hunters", function(req, res) {
  Hunter.find({},function(e,hunters){
    res.render('hunter/index',{
      user: req.user,
      hunters:hunters
  
    })
     
  })

  
})
router.get('/', function(req, res) {
  res.redirect('/items');
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/hunter',
    failureRedirect: '/hunter'
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/Hunter');
})

module.exports = router;


