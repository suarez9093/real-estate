const router = require("express").Router();
const listingsRoutes = require("./listings");

// Book routes
router.use("/listings", listingsRoutes);

module.exports = router;
