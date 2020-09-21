const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy

passport.serializeUser(function(user, done) {
  /*
  From the user take just the id (to minimize the cookie size) and just pass the id of the user
  to the done callback
  PS: You dont have to do it like this its just usually done like this
  */
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  /*
  Instead of user this function usually recives the id 
  then you use the id to select the user from the db and pass the user obj to the done callback
  PS: You can later access this data in any routes in: req.user
  */
  done(null, user);
});


passport.use(new GoogleStrategy({
    clientID: "275922886992-p1up9rdlcdqm3u6efmthjqct0gp3rt2p.apps.googleusercontent.com",
    clientSecret: "NAHgMflIs-RHW3E23NCXrEr5",
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));