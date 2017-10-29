const db = require("../models");
const crypto = require("crypto");

module.exports = {



    createUser: function(req, res) {
        console.log("hi");
        var salt = "54d6f7g8h9j0k9j8h7gf6"
        var data = req.body.password + salt;
        var md5Pw = crypto.createHash('md5').update(data).digest("hex");

        console.log(md5Pw);
        console.log(req.body);

        db.User.create(req.body)
            .then(res => {
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    }
}