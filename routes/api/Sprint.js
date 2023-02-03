const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


// Sprint Model
const Sprint = require('../../models/Sprint');
const Ticket = require('../../models/Ticket');
// Validation
const validateSprintInput = require('../../validation/sprint');


// @route GET api/sprint
// @desc Get All Sprint
// @access Private

router.get('/', async (req, res) => {
    await Sprint.find({ })
        .then(sprint => res.json(sprint))
        .catch(err => res.status(404).json({ noSprint: 'Sorry we don\'t have a sprint' }))
});

// @route POST api/sprint/ticketSprint/:id
// @desc Get all ticket Sprinting
// @access Private

router.get('/ticketSprint/:id', async (req, res) => {
    await Ticket.find({ sprint: req.params.id })
            .then(ticketSpring => res.json(ticketSpring))
            .catch(err => res.status(404).json({ noTicketSpring: 'Sorry we don\'t have  spring ticket'}))
});

// @route POST api/sprint
// @desc create a sprint
// @access Private

router.post('/', (req, res) => {
    const { errors, isValid } = validateSprintInput(req.body)
    // check validation
    if (!isValid) {
        // If any errors, send 400 with errors object
        return res.status(400).json(errors);
    }

    const newSprint = new Sprint({
        name: req.body.name,
        startDate: req.body.startDate,
        endDate: req.body.endDate
    })

    newSprint.save().then(sprint => res.json(sprint))
});



module.exports = router;