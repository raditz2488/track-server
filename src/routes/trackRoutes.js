const express = require('express');
const mongoose = require('mongoose');
const requiresAuth = require("../middlewares/requiresAuth");

const Track = mongoose.model("Track");

const router = express.Router();

router.use(requiresAuth);

router.get("/tracks", (req, res) => {
    
})