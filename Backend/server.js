const express = require('express');
const morgan = require("morgan");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 3000

dotenv.config({ path: 'var.env' });


const app = new express();


// connecting mongodb
require("./db/db")();

//middlewares
app.use(morgan('dev'));
app.use(express.json());


//routes
app.use("/addevent",require("./routes/addEvent"));
app.use("/event",require("./routes/getEvent"));
app.use("/users/login",require("./routes/users/login"))
app.use("/users/signup",require("./routes/users/signup"))



app.listen(PORT, console.log(`listening on port ${PORT}`));