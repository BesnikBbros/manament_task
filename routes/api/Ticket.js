const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Ticket Model
const Ticket = require('../../models/Ticket');

// Validation

const validateTicketInput = require('../../validation/ticket')


// @route GET api/ticket
// @desc Get ticket
// @access Private

router.get('/', async (req, res) => {
    await Ticket.find({})
        .then(ticket => res.json(ticket))
        .catch(err => res.status(404).json({ noTicket: "Sorry we don'\t have ticket"}));
});


// @route POST api/ticket
// @desc create a ticket
// @access Private

router.post('/', (req, res) => {
    const { errors, isValid } = validateTicketInput(req.body)
    // check validation
    if (!isValid) {
        // If any errors, send 400 with errors object
        return res.status(400).json(errors);
    }
    const newTicket = new Ticket({
        name: req.body.name,
        description: req.body.description,
        sprint: req.body.sprintId
    });

    newTicket.save().then(ticket => res.json(ticket))
});

module.exports = router;