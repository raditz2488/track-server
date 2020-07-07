const express = require('express');
const mongoose = require('mongoose');
const requiresAuth = require("../middlewares/requiresAuth");
const { route } = require('./authRoutes');

const Track = mongoose.model("Track");

const router = express.Router();

router.use(requiresAuth);

router.get("/tracks", async (req, res) => {
    const tracks = await Track.find({ userId: req.user._id });

    res.send({ tracks });
});

router.post("/tracks", async (req, res) => {
    const { name, locations } = req.body;
    try {
        const track = new Track({ name, locations, userId: req.user._id });
        await track.save();
        res.send({ track })
    } catch (err) {
        res.status(422).send({ error: err.message });
    }
    
})

module.exports = router;