const router = require("express").Router();
const apptRoutes = require("./appts");

// Article routes
router.use("/appointments", apptRoutes);

module.exports = router;