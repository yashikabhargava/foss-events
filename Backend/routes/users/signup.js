const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy

passport.use(new GoogleStrategy({
    clientID: 275922886992-p1up9rdlcdqm3u6efmthjqct0gp3rt2p.apps.googleusercontent.com,
    clientSecret: NAHgMflIs-RHW3E23NCXrEr5,
    callbackURL: "http://www.example.com/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));