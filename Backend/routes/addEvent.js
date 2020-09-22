const router = require('express').Router();
const events = require('../models/events');
const auth = require('./users/auth')

// post request for adding event
// data required in the request body- title, date, website, details 
router.post('/',auth, async (req, res) => {
    try{
        const { 
            title, 
            date, 
            website, 
            details
         } = req.body;
         const newEvent = new events({
             title,
             date,
             website,
             details
         });
         //saving data in db
         const newEventInfo = await newEvent.save();
         console.log(newEventInfo)
         res.send({
             message: "new event added",
             event: newEventInfo
         });
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            msg: "something went wrong"
        })
    }
});

module.exports = router;