const db = require("../models");
const express = require("express");
const crypto = require("crypto");
const app = express();
const twilio = require("twilio");
const nodemailer = require('nodemailer');
const moment = require("moment");




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
    findByTherapist: function(req, res) {
        console.log(req.body);
        db.Appointment
            .find({})
            .where(req.body)
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
                let userDate = moment(user.Date).format('dddd[,] MMMM Do[,] YYYY');
                let userSlot = moment().hour(9).minute(0).add(user.slot, 'hours').format('h:mm a');
                let smsBody = `${user.name}, your appointment is scheduled for Date: ${userDate} at Time: ${userSlot}`;
                let userNumber = user.phone;
                client.messages.create({
                    body: smsBody,
                    to: '+1' + userNumber, // Text this number
                    from: '+12345678901' // From a valid Twilio number
                });

                // Generate test SMTP service account from ethereal.email
                // Only needed if you don't have a real mail account for testing
                nodemailer.createTestAccount((err, account) => {
                    // create reusable transporter object using the default SMTP transport
                    let transporter = nodemailer.createTransport({
                        host: 'smtp.ethereal.email',
                        port: 587,
                        secure: false, // true for 465, false for other ports
                        auth: {
                            user: account.user, // generated ethereal user
                            pass: account.pass // generated ethereal password
                        }
                    });


                    // verify connection configuration
                    transporter.verify(function(error, success) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Server is ready to take our messages');
                        }
                    });


                    //setup email data with unicode symbols
                    let mailOptions = {
                        from: '"Vigor Appointments" <no@reply.com>', // sender address
                        to: 'kevin.michael.boyle@gmail.com', // list of receivers
                        subject: 'Scheduled Appointment', // Subject line
                        text: 'Hello world?', // plain text body
                        html: "<h1>New Appointment scheduled:</h1><br>" + "Name: " + user.name + ": " + userNumber + "<br>" +
                            "Date: " + userDate + "<br>" + "Time: " + userSlot // html body
                    };

                    // send mail with defined transport object
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            return console.log(error);
                        }
                        console.log('Message sent: %s', info.messageId);
                        // Preview only available when sending through an Ethereal account
                        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

                        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
                        //Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                    });
                });
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