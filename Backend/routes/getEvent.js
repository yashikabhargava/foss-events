const router = require('express').Router();
const mongoose = require('mongoose');
const event = require('../models/events');


// get request for displaying all events
router.get('/', async (req, res) => {
	try {
		const data = await event.find({}).select('title date website');
		console.log(data);
		res.send({
			msg: 'data fetched successfully',
			data,
		});
	} catch (err) {
		console.log(err);
		res.status(500).send({
			msg: 'Something went wrong',
		});
	}
});

//get request for displaying single event
router.get('/:title', async (req, res) => {
	try {
		const title = req.params.title;
		const data = await event.findOne({ title });
		res.send({
			msg: 'data fetched successfully',
			data
		});
	} catch (err) {
		console.log(err);
		res.status(500).send({
			message: 'something went wrong',
		});
	}
});

module.exports = router;
