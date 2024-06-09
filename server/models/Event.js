const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema({
    owner:{
        type: String,
        required: [true, "You're not logged in"]
    },
    animal:{
        type: String,
        required: [true, "You need to specify which animal is attached to event"]
    },
    description:{
        type:String,
        required: [true, "Specify what event is"]
    },
    date:{
        type: Date,
        required: [true, "Specify date"]
    },
});

const Event = mongoose.model('Event', eventSchema)

module.exports = Event;
