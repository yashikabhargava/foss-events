const mongoose = require("mongoose");

const eventsSchema = mongoose.Schema({
    title: {
        type: String,
        default: null
    },
    date: {
        type: date,
        required: true
    },
    details: {
        type: String,
        required: true
    }
})