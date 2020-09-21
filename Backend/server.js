const express = require('express');
const morgan = require("morgan");
const cors = require('cors');
const passport = require('passport')
const cookieSession = require('cookie-session')
require('./routes/users/login')
// const dotenv = require("dotenv");


// dotenv.config({ path: '.env' });


const app = new express();


// connecting mongodb
// require("./db/db")();

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieSession({
  name: 'foss-events',
  keys: ['key1', 'key2']
}))
app.use(passport.initialize());
app.use(passport.session());



//routes
// app.use("/signup",require("./routes/config/signup"));
// app.use("/login",require("./routes/config/login"));
app.use("/addevent",require("./routes/addEvent"));
app.use("/event",require("./routes/getEvent"));

app.get('/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

  app.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/good');
  });
  app.get('/failed', (req,res) => res.send('You failed to log in'));
app.get('/good', (req,res) => res.send(`Welcome user ${req.user.displayName}`));
app.listen(3000, console.log(`listening on port 3000`));