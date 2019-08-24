const router = require("express").Router();

const lockRoutes = require('./locks');
const appointmentRoutes = require('./appointment');

router.use('/lockitron', lockRoutes);
router.use('/appointment', appointmentRoutes)

module.exports = router;