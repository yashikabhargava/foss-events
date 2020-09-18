const router = require('express').Router();
const mongoose = require('mongoose');
const events = require('../models/events');

router.post('/', async (req, res) => {
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