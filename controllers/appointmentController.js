const db = require("../models");

module.exports = {
    create: function(req,res) {
        db.Appointment.create(req.body)
        .then(dbModel => res.json(dbModel)).catch(err => {console.error(err); res.status(422)});
    }
}
