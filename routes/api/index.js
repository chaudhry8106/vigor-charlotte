const router = require("express").Router();
const apptRoutes = require("./appts");
const contactRoute = require("./contactRequest");

// Article routes
router.use("/appointments", apptRoutes);

router.use("/contactRequest", contactRoute);

module.exports = router;