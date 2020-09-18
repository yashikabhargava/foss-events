const express = require('express');
const morgan = require("morgan");
// const dotenv = require("dotenv");


// dotenv.config({ path: '.env' });


const app = new express();


// connecting mongodb
require("./db/db")();

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
// app.use("/signup",require("./routes/config/signup"));
// app.use("/login",require("./routes/config/login"));
app.use("/addevent",require("./routes/addEvent"));
app.use("/event",require("./routes/getEvent"));

app.listen(5000, console.log(`listening on port 5000`));