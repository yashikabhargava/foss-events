const router = require('express').Router();
const events = require('../models/events');
const auth = require('./users/auth')


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
         const newEventInfo = await newEvent.save()
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