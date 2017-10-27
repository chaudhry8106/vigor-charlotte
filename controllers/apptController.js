const db = require("../models");
const express = require("express");
const app = express();


module.exports = {
    findAll: function(req, res) {
        db.Appointment
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Appointment
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Appointment
            .create(req.body)
            .then(dbModel => {
                //add functionality that will send a text message to the user using Twilio
                const appointment = req.body;
                console.log(appointment.phone);
                res.json(dbModel);
            })
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Appointment
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};