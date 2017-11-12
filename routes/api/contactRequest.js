const router = require("express").Router();
const contactRequestController = require("../../controllers/contactRequestController");


// Matches with "/api/contactRequest"
router.route("/")
    .post(contactRequestController.createRequest)
    .get(contactRequestController.getRequests);
module.exports = router;