const db = require("../models");
const express = require("express");
const crypto = require("crypto");
const app = express();
const twilio = require("twilio");
const config = require('../config')

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
                let user = req.body;
                let accountSid = 'AC741f233849b2d6f55b7176d377a74257'; // Your Account SID from www.twilio.com/console
                let authToken = 'your_auth_token'; // Your Auth Token from www.twilio.com/console
                let client = new twilio(accountSid, authToken);
                let smsBody = `${user.name}, your appointment is scheduled for Date: ${user.date} at Time: ${user.slot}`;
                let userNumber = user.number
                client.messages.create({
                        body: smsBody,
                        to: '+1' + userNumber, // Text this number
                        from: '+12345678901' // From a valid Twilio number
                    })
                    .then((message) => console.log(message.sid));

                console.log(`Your appointment is scheduled:
Date: ${user.date}
Time: ${user.slot}`);
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