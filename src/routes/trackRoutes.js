const express = require('express');
const mongoose = require('mongoose');
const requiresAuth = require("../middlewares/requiresAuth");
const { route } = require('./authRoutes');

const Track = mongoose.model("Track");

const router = express.Router();

router.use(requiresAuth);

router.get("/tracks", (req, res) => {
    const tracks = await Track.find({ userId: req.user._id });

    res.send({ tracks });
})

module.exports = router;