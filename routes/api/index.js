const router = require("express").Router();
const inmatesRoutes = require("./inmates");

// Book routes
router.use("/inmates", inmatesRoutes);

module.exports = router;
