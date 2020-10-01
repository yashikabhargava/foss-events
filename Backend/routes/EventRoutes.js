const router = require("express").Router();
const mongoose = require("mongoose");
const event = require("../models/events");
const auth = require("./users/auth");

// GET ROUTES

// get request for displaying all events
router.get("/", async (req, res) => {
  try {
    const data = await event.find({}).select("title date website");
    console.log(data);
    res.send({
      msg: "data fetched successfully",
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      msg: "Something went wrong",
    });
  }
});

//get request for displaying single event
router.get("/:title", async (req, res) => {
  try {
    const title = req.params.title;
    const data = await event.findOne({ title });
    res.send({
      msg: "data fetched successfully",
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "something went wrong",
    });
  }
});

// POST ROUTES

// post request for adding event
// data required in the request body- title, date, website, details
router.post("/addroom", auth, async (req, res) => {
  try {
    const { title, date, website, details } = req.body;
    const newEvent = new events({
      title,
      date,
      website,
      details,
    });
    //saving data in db
    const newEventInfo = await newEvent.save();
    console.log(newEventInfo);
    res.send({
      message: "new event added",
      event: newEventInfo,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      msg: "something went wrong",
    });
  }
});

// UPDATE ROUTES
// All the update routes will be written here

//Delete Routes
//All the delete routes will be written here
router.delete("/:title", async (req, res) => {
  try {
    const title = req.params.title;
    const data = await event.findOne({ title });
    data.remove({});
    res.send({
      msg: "event deleted successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "something went wrong",
    });
  }
});

module.exports = router;
