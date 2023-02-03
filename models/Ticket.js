const mongoose = require('mongoose');

const Schema =  mongoose.Schema;


const TicketSchema = new Schema({

    name: {
        type: String,
    },

    description: {
        type: String,
    },
     
    date:{
        type: Date,
        default: Date.now
    },

    sprint: { 
        type: String,
    }
});


module.exports = Ticket = mongoose.model('ticket', TicketSchema);

