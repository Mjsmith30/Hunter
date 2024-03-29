var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var Hunter = require('../model/Hunter');

passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    // A user has logged in with OAuth
    Hunter.findOne({googleId: profile.id}, function(err, hunter) {
      if(err) return cb(err);
      if (hunter) {
        return cb(null, hunter);
      } else {
        // We have a first-time user via OAuth!
        var newHunter = new Hunter({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newHunter.save(function(err) {
          if (err) return cb(err);
          return cb(null, newHunter);
        });
      }
    });
  }
));

passport.serializeUser(function(hunter, done) {
  done(null, hunter.id);
});

passport.deserializeUser(function(id, done) {
  Hunter.findById(id, function(err, hunter) {
    done(err, hunter);
  });
});
