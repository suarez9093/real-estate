const router = require("express").Router();
const bookRoutes = require("./books");
const lockRoutes = require('./locks');

// Book routes
router.use("/books", bookRoutes);
router.use('/lockitron', lockRoutes);


module.exports = router;