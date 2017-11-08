const db = require("../models");
const crypto = require("crypto");
const Login = require("../models/login");

module.exports = {
    //createUser is creting a user in our database
    createUser: function(req, res) {
        //here is password modification
        var salt = "540987gf09df8ksjf5870gsd"
        var data = req.body.password + salt;
        var md5Pw = crypto.createHash('md5').update(data).digest("hex");
        
        //creating a new login object referencing the Login model
        let newLogin = new Login({
            login_name: req.body.email,
            login_pass: md5Pw,
            salt: salt
        });
        console.log(newLogin);
        newLogin.save(function(err, userLogin) {
            console.log(err);
            if (err) {
                res.send(err);
            } else {
                console.log(req.body.name);
                //this is the Mongoose Model where we actually create the user
                db.User.create({
                    name: req.body.name,
                    email: req.body.email,
                    login: newLogin._id
                })
                res.send(userLogin);
            }
        });
    },
    //check login to verify we have a good user, pass and username match
    checkLogin: function(req, res) {
        console.log(req.body);
        console.log(`This should be password: ${req.body.user_pass}`);
        
        db.Login.findOne({
                //finding user login from the database
                login_name: req.body.login_name
            })
            .exec(function(err, entry) {
                if (!entry){
                    //
                    console.log("no user-123");
                    res.json({error: "No User Created"});
                } else {
                    //getting password and salt from table
                    let chkPassword = req.body.user_pass + entry.salt;
                    let pwToCheck = crypto.createHash("md5").update(chkPassword).digest("hex");
                    if (pwToCheck === entry.login_pass) {
                        console.log("good login");
                        res.json(req.body.login_name);
                    } else {
                        console.log("no good");
                        res.send(err);
                    }
                }
            })
    },
    getUser: function(req, res) {
        console.log(req.body.email);
        db.User.findOne({
            email: req.body.email
        }).exec(function(err, entry) {
            if (err) {
                res.send(err);
            } else {
                res.json(entry);
            }

        })
    }
}