const router = require("express").Router();

const lockRoutes = require('./locks');

// Book routes
router.use('/lockitron', lockRoutes);

module.exports = router;