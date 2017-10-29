const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const crypto = require("crypto");

// API Routes
router.use("/api", apiRoutes);

router.use("/userSignup", function(req, res) {
        var salt = "54d6f7g8h9j0k9j8h7gf6"
        var data = req.body.password + salt;
        var md5Pw = crypto.createHash('md5').update(data).digest("hex");

        console.log(md5Pw);
        console.log(req.body);
        res.send();
    })
    // If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;