const db = require("../models");
const express = require("express");
const crypto = require("crypto");
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
                res.json(dbModel);
            })
            .catch(err => res.status(422).json(err));
    },
    createUser: function(req, res) {

        var salt = "54d6f7g8h9j0k9j8h7gf6"
        var data = req.body.password + salt;
        var md5Pw = crypto.createHash('md5').update(data).digest("hex"); 

        console.log(md5Pw);
        console.log(req.body);
        

    },
    remove: function(req, res) {
        db.Appointment
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};