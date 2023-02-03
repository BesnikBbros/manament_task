const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema

const SprintSchema = new Schema({
    name: {
        type: String,
    },

    startDate: {
        type: Date,
    },

    endDate: {
        type: Date,
    }
});

module.exports = Sprint = mongoose.model('sprint', SprintSchema)