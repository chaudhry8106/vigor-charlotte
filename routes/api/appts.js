const router = require("express").Router();
const apptController = require("../../controllers/apptController");

// Matches with "/api/appointments"
router.route("/")
    .get(apptController.findAll)
    .post(apptController.create);
//this route is '/api/appointments/userSignup'
router.route("/userSignup")
    .post(apptController.createUser);

// Matches with "/api/appointment/:id"
router.route("/:id")
    .get(apptController.findById)
    //.put(apptController.update)
    .delete(apptController.remove);

module.exports = router;