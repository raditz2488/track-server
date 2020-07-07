const mongoose = require('mongoose');

const trackSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    name: {
        type: String,
        default: ""
    },

    locations: [pointSchema]
})