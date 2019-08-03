const router = require("express").Router();
// require some sort of route for schedule
const estateRoutes = require("./realEstate");


// Book routes
router.use("/estate", estateRoutes);

module.exports = router;
