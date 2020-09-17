const mongoose = require('mongoose');

function db(){
    mongoose.connect("mongodb://localhost/foss-events",{
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