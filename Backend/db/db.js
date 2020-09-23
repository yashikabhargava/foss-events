const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

function db(){
    mongoose.connect(process.env.DB_CONNECT,{
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Database Connected");
    })
    .catch(err => {
        console.log(err);
    });
}

module.exports = db;