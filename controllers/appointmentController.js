const db = require("../models/appointment");

module.exports = {
    create: function(req,res) {
        db.Appointment.create(req.body)
        .then(dbModel => res.json(dbModel)).catch(err => res.status(422)).json(err);
    }
}